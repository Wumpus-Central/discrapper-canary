n.d(t, {
    H4: () => u,
    e$: () => c,
    zg: () => d,
});
var l = n(54381),
    i = n(481060),
    r = n(598117),
    a = n(981631),
    o = n(185923),
    s = n(388032);
let u = (e) => {
        let { error: t, variant: n, color: r } = e;
        return (0, l.jsx)(i.Text, {
            variant: n,
            color: r,
            children: c(t),
        });
    },
    c = (e) => {
        switch (e) {
            case a.evJ.TOO_MANY_EMOJI:
            case a.evJ.TOO_MANY_ANIMATED_EMOJI:
                return s.intl.string(s.t.FtKH49);
            case r.ze.TOO_BIG:
            case a.evJ.INVALID_FILE_ASSET_SIZE:
            case a.evJ.INVALID_FORM_BODY:
                return s.intl.formatToPlainString(s.t.kIO9jy, { maxSize: o.xG });
            case a.evJ.INVALID_FILE_ASSET_SIZE_RESIZE_GIF:
                return s.intl.string(s.t.sp16MU);
            case r.ze.MISSING_IMAGE_DATA:
                return s.intl.string(s.t["41/Kbh"]);
            case r.ze.MISSING_GUILD:
                return s.intl.string(s.t["8RCtpD"]);
            case r.ze.ANIMATED_CROPPING:
                return s.intl.string(s.t.yoVkHN);
            case r.ze.IMAGE_LOAD:
                return s.intl.format(s.t.xZLPcF, {});
            case r.ze.NO_PERMISSIONS:
                return s.intl.string(s.t.QY7ZFZ);
            case 429:
                return s.intl.string(s.t["4rjikl"]);
            case r.ze.UNKNOWN:
            default:
                return s.intl.string(s.t.iufib1);
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
        return r.ze.UNKNOWN;
    };
