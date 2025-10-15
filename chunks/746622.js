n.d(t, {
    H4: () => u,
    e$: () => c,
    zg: () => d,
});
var r = n(951288),
    i = n(481060),
    l = n(598117),
    a = n(981631),
    s = n(185923),
    o = n(388032);
let u = (e) => {
        let { error: t, variant: n, color: l } = e;
        return (0, r.jsx)(i.Text, {
            variant: n,
            color: l,
            children: c(t),
        });
    },
    c = (e) => {
        switch (e) {
            case a.evJ.TOO_MANY_EMOJI:
            case a.evJ.TOO_MANY_ANIMATED_EMOJI:
                return o.intl.string(o.t.FtKH49);
            case l.ze.TOO_BIG:
            case a.evJ.INVALID_FILE_ASSET_SIZE:
            case a.evJ.INVALID_FORM_BODY:
                return o.intl.formatToPlainString(o.t.kIO9jy, { maxSize: s.xG });
            case a.evJ.INVALID_FILE_ASSET_SIZE_RESIZE_GIF:
                return o.intl.string(o.t.sp16MU);
            case l.ze.MISSING_IMAGE_DATA:
                return o.intl.string(o.t["41/Kbh"]);
            case l.ze.MISSING_GUILD:
                return o.intl.string(o.t["8RCtpD"]);
            case l.ze.GIF_CROPPING:
                return o.intl.string(o.t.X6rtiO);
            case l.ze.IMAGE_LOAD:
                return o.intl.format(o.t.xZLPcF, {});
            case l.ze.NO_PERMISSIONS:
                return o.intl.string(o.t.QY7ZFZ);
            case 429:
                return o.intl.string(o.t["4rjikl"]);
            case l.ze.UNKNOWN:
            default:
                return o.intl.string(o.t.iufib1);
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
