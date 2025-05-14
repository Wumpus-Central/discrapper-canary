r.d(t, {
    H: () => c,
    z: () => d
});
var n = r(255367),
    l = r(598117),
    i = r(981631),
    a = r(185923),
    o = r(388032),
    s = r(632261);
let c = (e) => {
        let { error: t } = e;
        return (0, n.jsx)('div', {
            className: s.errorBanner,
            children: (0, n.jsx)('p', { children: u(t) })
        });
    },
    u = (e) => {
        switch (e) {
            case i.evJ.TOO_MANY_EMOJI:
                return o.intl.string(o.t['jP/Rqq']);
            case i.evJ.TOO_MANY_ANIMATED_EMOJI:
                return o.intl.string(o.t['6v5dPz']);
            case l.ze.TOO_BIG:
            case i.evJ.INVALID_FILE_ASSET_SIZE:
            case i.evJ.INVALID_FORM_BODY:
                return o.intl.formatToPlainString(o.t.kIO9j4, { maxSize: a.xG });
            case i.evJ.INVALID_FILE_ASSET_SIZE_RESIZE_GIF:
                return o.intl.string(o.t.sp16MT);
            case l.ze.MISSING_IMAGE_DATA:
                return o.intl.string(o.t['41/Kbm']);
            case l.ze.MISSING_GUILD:
                return o.intl.string(o.t['8RCtpK']);
            case l.ze.GIF_CROPPING:
                return o.intl.string(o.t.X6rtiI);
            case l.ze.IMAGE_LOAD:
                return o.intl.string(o.t['+ITMYW']);
            case 429:
                return o.intl.string(o.t['4rjikp']);
            case l.ze.UNKNOWN:
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
        return l.ze.UNKNOWN;
    };
