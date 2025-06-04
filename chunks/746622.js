r.d(t, {
    H: () => c,
    z: () => d
});
var n = r(255367),
    a = r(598117),
    l = r(981631),
    s = r(185923),
    i = r(388032),
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
            case l.evJ.TOO_MANY_EMOJI:
                return i.intl.string(i.t['jP/Rqq']);
            case l.evJ.TOO_MANY_ANIMATED_EMOJI:
                return i.intl.string(i.t['6v5dPz']);
            case a.ze.TOO_BIG:
            case l.evJ.INVALID_FILE_ASSET_SIZE:
            case l.evJ.INVALID_FORM_BODY:
                return i.intl.formatToPlainString(i.t.kIO9j4, { maxSize: s.xG });
            case l.evJ.INVALID_FILE_ASSET_SIZE_RESIZE_GIF:
                return i.intl.string(i.t.sp16MT);
            case a.ze.MISSING_IMAGE_DATA:
                return i.intl.string(i.t['41/Kbm']);
            case a.ze.MISSING_GUILD:
                return i.intl.string(i.t['8RCtpK']);
            case a.ze.GIF_CROPPING:
                return i.intl.string(i.t.X6rtiI);
            case a.ze.IMAGE_LOAD:
                return i.intl.string(i.t['+ITMYW']);
            case a.ze.NO_PERMISSIONS:
                return i.intl.string(i.t.QY7ZFR);
            case 429:
                return i.intl.string(i.t['4rjikp']);
            case a.ze.UNKNOWN:
            default:
                return i.intl.string(i.t.iufib2);
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
