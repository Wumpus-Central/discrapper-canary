n.d(t, {
    H: () => u,
    z: () => d,
});
var r = n(951288),
    l = n(481060),
    i = n(598117),
    a = n(981631),
    s = n(185923),
    o = n(388032);
let u = (e) => {
        let { error: t, variant: n, color: i } = e;
        return (0, r.jsx)(l.Text, {
            variant: n,
            color: i,
            children: c(t),
        });
    },
    c = (e) => {
        switch (e) {
            case a.evJ.TOO_MANY_EMOJI:
            case a.evJ.TOO_MANY_ANIMATED_EMOJI:
                return o.intl.string(o.t["FtKH4+"]);
            case i.ze.TOO_BIG:
            case a.evJ.INVALID_FILE_ASSET_SIZE:
            case a.evJ.INVALID_FORM_BODY:
                return o.intl.formatToPlainString(o.t.kIO9j4, { maxSize: s.xG });
            case a.evJ.INVALID_FILE_ASSET_SIZE_RESIZE_GIF:
                return o.intl.string(o.t.sp16MT);
            case i.ze.MISSING_IMAGE_DATA:
                return o.intl.string(o.t["41/Kbm"]);
            case i.ze.MISSING_GUILD:
                return o.intl.string(o.t["8RCtpK"]);
            case i.ze.GIF_CROPPING:
                return o.intl.string(o.t.X6rtiI);
            case i.ze.IMAGE_LOAD:
                return o.intl.format(o.t.xZLPcH, {});
            case i.ze.NO_PERMISSIONS:
                return o.intl.string(o.t.QY7ZFR);
            case 429:
                return o.intl.string(o.t["4rjikp"]);
            case i.ze.UNKNOWN:
            default:
                return o.intl.string(o.t.iufib2);
        }
    },
    d = (e) => {
        var t;
        if ((null == e || null == (t = e.body) ? void 0 : t.code) != null) {
            let t = Number(e.body.code);
            if (!Number.isNaN(t)) return t;
        }
        if (null == e ? void 0 : e.text)
            try {
                let t = JSON.parse(e.text);
                if ((null == t ? void 0 : t.code) != null) {
                    let e = Number(t.code);
                    if (!Number.isNaN(e)) return e;
                }
            } catch (e) {}
        return i.ze.UNKNOWN;
    };
