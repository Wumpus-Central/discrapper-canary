l.d(t, { E2: () => d, Fx: () => u, u1: () => c });
var n = l(627968),
    i = l(834730),
    a = l(80569),
    r = l(652215),
    s = l(307731),
    o = l(985018);
let u = (e) => {
        let { error: t, variant: l, color: a } = e;
        return (0, n.jsx)(i.E, { variant: l, color: a, children: c(t) });
    },
    c = (e) => {
        switch (e) {
            case r.t02.TOO_MANY_EMOJI:
            case r.t02.TOO_MANY_ANIMATED_EMOJI:
                return o.intl.string(o.t.FtKH49);
            case a.j.TOO_BIG:
            case r.t02.INVALID_FILE_ASSET_SIZE:
            case r.t02.INVALID_FORM_BODY:
                return o.intl.formatToPlainString(o.t.kIO9jy, { maxSize: s.EMOJI_MAX_FILESIZE_KB });
            case r.t02.INVALID_FILE_ASSET_SIZE_RESIZE_ANIMATED:
                return o.intl.string(o.t["6WN/qk"]);
            case a.j.MISSING_IMAGE_DATA:
                return o.intl.string(o.t["41/Kbh"]);
            case a.j.MISSING_GUILD:
                return o.intl.string(o.t["8RCtpD"]);
            case a.j.ANIMATED_CROPPING:
                return o.intl.string(o.t.yoVkHN);
            case a.j.IMAGE_LOAD:
                return o.intl.format(o.t.xZLPcF, {});
            case a.j.NO_PERMISSIONS:
                return o.intl.string(o.t.QY7ZFZ);
            case 429:
                return o.intl.string(o.t["4rjikl"]);
            case a.j.UNKNOWN:
            default:
                return o.intl.string(o.t.iufib1);
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
        return a.j.UNKNOWN;
    };
