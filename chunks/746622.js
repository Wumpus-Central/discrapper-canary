n.d(t, {
    H: () => c,
    z: () => d
});
var r = n(255367),
    l = n(481060),
    a = n(598117),
    i = n(981631),
    s = n(185923),
    o = n(388032);
let c = (e) => {
        let { error: t, color: n = 'text-danger' } = e;
        return (0, r.jsx)(l.Text, {
            variant: 'text-sm/normal',
            color: n,
            children: u(t)
        });
    },
    u = (e) => {
        switch (e) {
            case i.evJ.TOO_MANY_EMOJI:
                return o.intl.string(o.t['jP/Rqq']);
            case i.evJ.TOO_MANY_ANIMATED_EMOJI:
                return o.intl.string(o.t['6v5dPz']);
            case a.ze.TOO_BIG:
            case i.evJ.INVALID_FILE_ASSET_SIZE:
            case i.evJ.INVALID_FORM_BODY:
                return o.intl.formatToPlainString(o.t.kIO9j4, { maxSize: s.xG });
            case i.evJ.INVALID_FILE_ASSET_SIZE_RESIZE_GIF:
                return o.intl.string(o.t.sp16MT);
            case a.ze.MISSING_IMAGE_DATA:
                return o.intl.string(o.t['41/Kbm']);
            case a.ze.MISSING_GUILD:
                return o.intl.string(o.t['8RCtpK']);
            case a.ze.GIF_CROPPING:
                return o.intl.string(o.t.X6rtiI);
            case a.ze.IMAGE_LOAD:
                return o.intl.format(o.t.xZLPcH, {});
            case a.ze.NO_PERMISSIONS:
                return o.intl.string(o.t.QY7ZFR);
            case 429:
                return o.intl.string(o.t['4rjikp']);
            case a.ze.UNKNOWN:
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
        return a.ze.UNKNOWN;
    };
