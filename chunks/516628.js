l.d(t, { E2: () => d, Fx: () => o, u1: () => c });
var n = l(627968),
    i = l(397927),
    r = l(80569),
    a = l(652215),
    s = l(307731),
    u = l(985018);
let o = (e) => {
        let { error: t, variant: l, color: r } = e;
        return (0, n.jsx)(i.Text, { variant: l, color: r, children: c(t) });
    },
    c = (e) => {
        switch (e) {
            case a.t02.TOO_MANY_EMOJI:
            case a.t02.TOO_MANY_ANIMATED_EMOJI:
                return u.intl.string(u.t.FtKH49);
            case r.j.TOO_BIG:
            case a.t02.INVALID_FILE_ASSET_SIZE:
            case a.t02.INVALID_FORM_BODY:
                return u.intl.formatToPlainString(u.t.kIO9jy, { maxSize: s.EMOJI_MAX_FILESIZE_KB });
            case a.t02.INVALID_FILE_ASSET_SIZE_RESIZE_ANIMATED:
                return u.intl.string(u.t["6WN/qk"]);
            case r.j.MISSING_IMAGE_DATA:
                return u.intl.string(u.t["41/Kbh"]);
            case r.j.MISSING_GUILD:
                return u.intl.string(u.t["8RCtpD"]);
            case r.j.ANIMATED_CROPPING:
                return u.intl.string(u.t.yoVkHN);
            case r.j.IMAGE_LOAD:
                return u.intl.format(u.t.xZLPcF, {});
            case r.j.NO_PERMISSIONS:
                return u.intl.string(u.t.QY7ZFZ);
            case 429:
                return u.intl.string(u.t["4rjikl"]);
            case r.j.UNKNOWN:
            default:
                return u.intl.string(u.t.iufib1);
        }
    },
    d = (e) => {
        if (e?.body?.code != null) {
            let t = Number(e.body.code);
            if (!Number.isNaN(t)) return t;
        }
        if (e?.text)
            try {
                let t = JSON.parse(e.text);
                if (t?.code != null) {
                    let e = Number(t.code);
                    if (!Number.isNaN(e)) return e;
                }
            } catch (e) {}
        return r.j.UNKNOWN;
    };
