n.d(t, { E2: () => c, Fx: () => u, u1: () => o });
var l = n(627968),
    i = n(397927),
    r = n(80569),
    a = n(652215);
n(307731);
var s = n(985018);
let u = (e) => {
        let { error: t, variant: n, color: r } = e;
        return (0, l.jsx)(i.Text, { variant: n, color: r, children: o(t) });
    },
    o = (e) => {
        switch (e) {
            case a.t02.TOO_MANY_EMOJI:
            case a.t02.TOO_MANY_ANIMATED_EMOJI:
                return s.intl.string(s.t.FtKH49);
            case r.j.TOO_BIG:
            case a.t02.INVALID_FILE_ASSET_SIZE:
            case a.t02.INVALID_FORM_BODY:
                return s.intl.formatToPlainString(s.t.kIO9jy, { maxSize: 256 });
            case a.t02.INVALID_FILE_ASSET_SIZE_RESIZE_GIF:
                return s.intl.string(s.t.sp16MU);
            case r.j.MISSING_IMAGE_DATA:
                return s.intl.string(s.t["41/Kbh"]);
            case r.j.MISSING_GUILD:
                return s.intl.string(s.t["8RCtpD"]);
            case r.j.ANIMATED_CROPPING:
                return s.intl.string(s.t.yoVkHN);
            case r.j.IMAGE_LOAD:
                return s.intl.format(s.t.xZLPcF, {});
            case r.j.NO_PERMISSIONS:
                return s.intl.string(s.t.QY7ZFZ);
            case 429:
                return s.intl.string(s.t["4rjikl"]);
            case r.j.UNKNOWN:
            default:
                return s.intl.string(s.t.iufib1);
        }
    },
    c = (e) => {
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
