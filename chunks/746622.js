r.d(t, {
    H: () => c,
    z: () => d
});
var n = r(200651),
    l = r(535455),
    i = r(981631),
    o = r(185923),
    a = r(388032),
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
                return a.intl.string(a.t['jP/Rqq']);
            case i.evJ.TOO_MANY_ANIMATED_EMOJI:
                return a.intl.string(a.t['6v5dPz']);
            case i.evJ.INVALID_FILE_ASSET_SIZE:
            case i.evJ.INVALID_FORM_BODY:
                return a.intl.formatToPlainString(a.t.kIO9j4, { maxSize: o.xG });
            case i.evJ.INVALID_FILE_ASSET_SIZE_RESIZE_GIF:
                return a.intl.string(a.t.sp16MT);
            case l.z.MISSING_IMAGE_DATA:
                return a.intl.string(a.t['41/Kbm']);
            case l.z.MISSING_GUILD:
                return a.intl.string(a.t['8RCtpK']);
            case 429:
                return a.intl.string(a.t['4rjikp']);
            case l.z.UNKNOWN:
            default:
                return a.intl.string(a.t.iufib2);
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
        return l.z.UNKNOWN;
    };
