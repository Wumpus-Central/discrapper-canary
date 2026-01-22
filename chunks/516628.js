n.d(t, {
    E2: () => d,
    Fx: () => o,
    u1: () => c,
});
var l = n(627968),
    r = n(397927),
    i = n(80569),
    a = n(652215),
    s = n(307731),
    u = n(985018);
let o = (e) => {
        let { error: t, variant: n, color: i } = e;
        return (0, l.jsx)(r.Text, {
            variant: n,
            color: i,
            children: c(t),
        });
    },
    c = (e) => {
        switch (e) {
            case a.t02.TOO_MANY_EMOJI:
            case a.t02.TOO_MANY_ANIMATED_EMOJI:
                return u.intl.string(u.t.FtKH49);
            case i.j.TOO_BIG:
            case a.t02.INVALID_FILE_ASSET_SIZE:
            case a.t02.INVALID_FORM_BODY:
                return u.intl.formatToPlainString(u.t.kIO9jy, { maxSize: s.i9 });
            case a.t02.INVALID_FILE_ASSET_SIZE_RESIZE_GIF:
                return u.intl.string(u.t.sp16MU);
            case i.j.MISSING_IMAGE_DATA:
                return u.intl.string(u.t["41/Kbh"]);
            case i.j.MISSING_GUILD:
                return u.intl.string(u.t["8RCtpD"]);
            case i.j.ANIMATED_CROPPING:
                return u.intl.string(u.t.yoVkHN);
            case i.j.IMAGE_LOAD:
                return u.intl.format(u.t.xZLPcF, {});
            case i.j.NO_PERMISSIONS:
                return u.intl.string(u.t.QY7ZFZ);
            case 429:
                return u.intl.string(u.t["4rjikl"]);
            case i.j.UNKNOWN:
            default:
                return u.intl.string(u.t.iufib1);
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
        return i.j.UNKNOWN;
    };
