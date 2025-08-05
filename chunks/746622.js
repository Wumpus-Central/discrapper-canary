n.d(t, {
    H: () => u,
    z: () => d
});
var r = n(255367),
    l = n(481060),
    i = n(598117),
    a = n(981631),
    o = n(185923),
    s = n(388032);
let u = (e) => {
        let { error: t, variant: n, color: i } = e;
        return (0, r.jsx)(l.Text, {
            variant: n,
            color: i,
            children: c(t)
        });
    },
    c = (e) => {
        switch (e) {
            case a.evJ.TOO_MANY_EMOJI:
            case a.evJ.TOO_MANY_ANIMATED_EMOJI:
                return s.intl.string(s.t['FtKH4+']);
            case i.ze.TOO_BIG:
            case a.evJ.INVALID_FILE_ASSET_SIZE:
            case a.evJ.INVALID_FORM_BODY:
                return s.intl.formatToPlainString(s.t.kIO9j4, { maxSize: o.xG });
            case a.evJ.INVALID_FILE_ASSET_SIZE_RESIZE_GIF:
                return s.intl.string(s.t.sp16MT);
            case i.ze.MISSING_IMAGE_DATA:
                return s.intl.string(s.t['41/Kbm']);
            case i.ze.MISSING_GUILD:
                return s.intl.string(s.t['8RCtpK']);
            case i.ze.GIF_CROPPING:
                return s.intl.string(s.t.X6rtiI);
            case i.ze.IMAGE_LOAD:
                return s.intl.format(s.t.xZLPcH, {});
            case i.ze.NO_PERMISSIONS:
                return s.intl.string(s.t.QY7ZFR);
            case 429:
                return s.intl.string(s.t['4rjikp']);
            case i.ze.UNKNOWN:
            default:
                return s.intl.string(s.t.iufib2);
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
