d.d(t, { t: () => i });
var i = class l {
    static fromImageData(t) {
        let d = document.createElement("canvas");
        (d.width = t.width), (d.height = t.height);
        let i = d.getContext("2d", { willReadFrequently: !0 });
        return i && "putImageData" in i && i.putImageData(t, 0, 0), new l(d);
    }
    constructor(l) {
        (this.base64Image = null),
            (this.blobData = null),
            (this.canvas = document.createElement("canvas")),
            (this.canvas.width = l.width),
            (this.canvas.height = l.height);
        const t = this.canvas.getContext("2d");
        t && t.drawImage(l, 0, 0);
    }
    checkCanvas() {
        return this.canvas && this.canvas.width > 1 && this.canvas.height > 1;
    }
    dispose() {
        this.blobData?.url && (URL.revokeObjectURL(this.blobData.url), (this.blobData = null)),
            (this.base64Image = null);
    }
    release() {
        this.checkCanvas() &&
            ((this.canvas.width = 1),
            (this.canvas.height = 1),
            this.canvas.getContext("2d")?.clearRect(0, 0, 1, 1),
            (this.base64Image = null),
            this.blobData?.url && URL.revokeObjectURL(this.blobData.url),
            (this.blobData = null));
    }
    revokeObjectURL() {
        this.blobData?.url && (URL.revokeObjectURL(this.blobData.url), (this.blobData = { ...this.blobData, url: "" }));
    }
    width() {
        return this.checkCanvas() ? this.canvas.width : null;
    }
    height() {
        return this.checkCanvas() ? this.canvas.height : null;
    }
    setWidth(l) {
        this.checkCanvas() && (this.canvas.width = l);
    }
    setHeight(l) {
        this.checkCanvas() && (this.canvas.height = l);
    }
    clone() {
        if (!this.checkCanvas()) return null;
        let t = new l(this.canvas);
        return t.setBase64Image(this.base64Image), t;
    }
    async deepClone() {
        let l = this.clone();
        return l ? (this.blobData && (await l.setBlobData(this.blobData)), l) : null;
    }
    getContext(l, t) {
        if (!this.checkCanvas()) return null;
        let d = this.canvas.getContext(l, t);
        return d instanceof CanvasRenderingContext2D ? d : null;
    }
    getImageData() {
        if (!this.checkCanvas()) return null;
        let l = this.canvas.getContext("2d", { willReadFrequently: !0 });
        return l ? l.getImageData(0, 0, this.canvas.width, this.canvas.height) : null;
    }
    updateBase64Image(l = 1) {
        this.checkCanvas() && (this.base64Image = this.canvas.toDataURL("image/jpeg", l));
    }
    getBase64Image(l = 1, t = !1) {
        if (!this.checkCanvas()) return null;
        null === this.base64Image && this.updateBase64Image(l);
        let d = this.base64Image;
        if (null === d) return null;
        if (t) return d;
        let i = d.indexOf(",");
        return -1 === i ? d : d.slice(i + 1);
    }
    setBase64Image(l) {
        this.base64Image = l;
    }
    updateBlob(t = 1, d = !1) {
        if (!this.checkCanvas()) return;
        null === this.base64Image && this.updateBase64Image(t);
        let i = this.getBase64Image(t, d);
        i && (this.blobData = l.base64ToBlob(i));
    }
    static base64ToBlob(l) {
        try {
            let t = atob(l),
                d = [];
            for (let l = 0; l < t.length; l++) d.push(t.charCodeAt(l));
            let i = new Blob([new Uint8Array(d)]);
            return { blob: i, url: URL.createObjectURL(i) };
        } catch (l) {
            console.error("Failed to convert base64 string to Blob:", l);
        }
        return null;
    }
    getBlobData(l = 1, t = !1) {
        return this.checkCanvas() ? (null === this.blobData && this.updateBlob(l, t), this.blobData) : null;
    }
    async setBlobData(l) {
        let t = await l.blob.arrayBuffer();
        this.blobData = { blob: new Blob([t], { type: l.blob.type }), url: l.url };
    }
    getResizedCanvas(t, d) {
        if (!this.checkCanvas()) return null;
        let i = Math.abs(t - window.innerWidth),
            e = new l(document.createElement("canvas")),
            c = this.height();
        if (!c) return null;
        let a = c / d,
            s = window.innerWidth,
            n = window.innerHeight;
        e.setWidth(s), e.setHeight(n);
        let Z = e.getContext("2d");
        return Z ? (Z.drawImage(this.canvas, (a * i) / 2, 0, a * s, a * n, 0, 0, s, n), e) : null;
    }
};
