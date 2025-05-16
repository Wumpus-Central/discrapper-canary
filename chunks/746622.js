r.d(t, {
    H: () => c,
    z: () => d
});
var n = r(255367),
    a = r(598117),
    i = r(981631),
    s = r(185923),
    l = r(388032),
    o = r(632261);
let c = (e) => {
        let { error: t } = e;
        return (0, n.jsx)('div', {
            className: o.errorBanner,
            children: (0, n.jsx)('p', { children: u(t) })
        });
    },
    u = (e) => {
        switch (e) {
            case i.evJ.TOO_MANY_EMOJI:
                return l.intl.string(l.t['jP/Rqq']);
            case i.evJ.TOO_MANY_ANIMATED_EMOJI:
                return l.intl.string(l.t['6v5dPz']);
            case a.ze.TOO_BIG:
            case i.evJ.INVALID_FILE_ASSET_SIZE:
            case i.evJ.INVALID_FORM_BODY:
                return l.intl.formatToPlainString(l.t.kIO9j4, { maxSize: s.xG });
            case i.evJ.INVALID_FILE_ASSET_SIZE_RESIZE_GIF:
                return l.intl.string(l.t.sp16MT);
            case a.ze.MISSING_IMAGE_DATA:
                return l.intl.string(l.t['41/Kbm']);
            case a.ze.MISSING_GUILD:
                return l.intl.string(l.t['8RCtpK']);
            case a.ze.GIF_CROPPING:
                return l.intl.string(l.t.X6rtiI);
            case a.ze.IMAGE_LOAD:
                return l.intl.string(l.t['+ITMYW']);
            case 429:
                return l.intl.string(l.t['4rjikp']);
            case a.ze.UNKNOWN:
            default:
                return l.intl.string(l.t.iufib2);
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
        return a.ze.UNKNOWN;
    };
