function l(e, n, t) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: t,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = t),
        e
    );
}
t.d(n, { Z: () => r }), t(518263), t(970173), t(520712), t(268111), t(941497), t(32026), t(480839), t(744285), t(492257), t(873817), t(610885), t(126298), t(411104), t(47120), t(242167), t(653041);
class a {
    appendBytes(e) {
        if (this._offset + e.length > this._buffer.length) {
            let n = this._offset + e.length,
                t = new Uint8Array(Math.pow(2, Math.ceil(Math.log2(Math.max(2 * this._buffer.length, n)))));
            t.set(this._buffer.subarray(0, this._offset)), (this._buffer = t);
        }
        this._buffer.set(e, this._offset), (this._offset += e.length);
    }
    addPage(e) {
        if (e.segments.length > 255) throw Error('Too many segments: '.concat(e.segments.length, ' exceeds limit of ').concat(255));
        for (let [n, t] of e.segments.entries()) if (t.length > 255) throw Error('Segment at index '.concat(n, ' too large (length ').concat(t.length, ' exceeds ').concat(255, ')'));
        let n = e.segments.reduce((e, n) => e + n.length, 0),
            t = 27 + e.segments.length + n;
        if (t > 65307) throw Error('Page too large (size '.concat(t, ' exceeds ').concat(65307, ')'));
        let l = this._offset,
            a = 0;
        switch (e.pageType) {
            case 1:
                a = 1;
                break;
            case 2:
                a = 2;
                break;
            case 4:
                a = 4;
        }
        this.appendBytes([79, 103, 103, 83, 0, a, 255 & e.granulePosition, (e.granulePosition >> 8) & 255, (e.granulePosition >> 16) & 255, (e.granulePosition >> 24) & 255, 0, 0, 0, 0, 0, 0, 0, 1, 255 & this._pageSequenceNumber, (this._pageSequenceNumber >> 8) & 255, (this._pageSequenceNumber >> 16) & 255, (this._pageSequenceNumber >> 24) & 255]);
        let r = this._offset;
        for (let n of (this.appendBytes([0, 0, 0, 0, e.segments.length]), this.appendBytes(e.segments.map((e) => e.length)), e.segments)) this.appendBytes(n);
        let s = this._buffer.subarray(l, this._offset).reduce((e, n) => ((e << 8) >>> 0) ^ i[(e >>> 24) ^ n], 0) >>> 0;
        this._buffer.set([255 & s, (s >> 8) & 255, (s >> 16) & 255, (s >> 24) & 255], r), this._pageSequenceNumber++;
    }
    finalize(e) {
        this.addPage({
            pageType: 4,
            granulePosition: e,
            segments: []
        });
        let n = this._buffer,
            t = this._offset;
        return (this._buffer = new Uint8Array(4096)), (this._offset = 0), (this._pageSequenceNumber = 0), n.subarray(0, t);
    }
    constructor() {
        l(this, '_buffer', new Uint8Array(4096)), l(this, '_pageSequenceNumber', 0), l(this, '_offset', 0);
    }
}
function r(e, n) {
    let t = new Uint8Array([79, 112, 117, 115, 72, 101, 97, 100, 1, n.channelCount, 0, 0, 255 & n.inputSampleRate, (n.inputSampleRate >> 8) & 255, (n.inputSampleRate >> 16) & 255, (n.inputSampleRate >> 24) & 255, 255 & n.outputGain, (n.outputGain >> 8) & 255, n.channelMappingFamily]),
        l = new Uint8Array([79, 112, 117, 115, 84, 97, 103, 115, 0, 0, 0, 0, 0, 0, 0, 0]),
        r = new a();
    r.addPage({
        pageType: 2,
        granulePosition: 0,
        segments: [t]
    });
    let i = 0;
    for (let n of (r.addPage({
        pageType: 0,
        granulePosition: i,
        segments: [l]
    }),
    e)) {
        let e = (function (e) {
            let n = Math.floor(e.length / 255),
                t = [];
            for (let l = 0; l <= n; l++) {
                let a = 0 === l ? 0 : 255 * l,
                    r = l === n ? e.length : (l + 1) * 255;
                t.push(e.slice(a, r));
            }
            return t;
        })(n.buffer);
        (i += n.numSamples),
            r.addPage({
                pageType: 0,
                granulePosition: i,
                segments: e
            });
    }
    return r.finalize(i);
}
let i = (function () {
    let e = new Uint32Array(256);
    for (let n = 256; n > 0; n--) {
        let t = n << 24;
        for (let e = 8; e > 0; e--) t = 2147483648 & t ? 79764919 ^ (t << 1) : t << 1;
        e[n] = t;
    }
    return e;
})();
