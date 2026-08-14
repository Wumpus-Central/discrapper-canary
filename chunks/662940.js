n.d(e, { C0: () => d, CK: () => A, Dd: () => x, UK: () => c, pv: () => C, vj: () => E });
var s,
    i = n(927813),
    o = n(792620),
    r = n(814793),
    a = n(79545),
    l = n(190107),
    u = n(375708),
    c =
        221552 == n.j
            ? (((s = {})[(s.PLAY = 0)] = "PLAY"),
              (s[(s.WATCH = 1)] = "WATCH"),
              (s[(s.ACTIVITY = 2)] = "ACTIVITY"),
              (s[(s.INSTANT_PLAY = 3)] = "INSTANT_PLAY"),
              (s[(s.ARENA = 4)] = "ARENA"),
              s)
            : null;
function C(t) {
    return (0, o.GL)(t)
        ? 4 * !!(0, r.ui)(t)
        : (0, o.vv)(t)
          ? 1
          : (0, o.Ki)(t)
            ? t.config.features.includes(l.Li.CLOUD_GAMING_ACTIVITY)
                ? 3
                : 2
            : 0;
}
function d(t) {
    switch (C(t)) {
        case 0:
            return u.intl.string(u.t.U7cCLU);
        case 1:
            return u.intl.string(u.t.kfks9Y);
        case 2:
            return u.intl.string(u.t.U0sDwa);
        case 3:
            return u.intl.string(u.t.V5Qt9D);
        case 4:
            return u.intl.string(u.t.P1uOM8);
    }
}
function E(t) {
    switch (C(t)) {
        case 3:
            return u.intl.string(u.t.C2kQR8);
        case 1:
            return u.intl.string(u.t.PMVy7M);
        case 2:
            return u.intl.string(u.t.RPSnmI);
        default:
            return u.intl.string(u.t.cfY4PE);
    }
}
function x(t, e, n) {
    let s = new Date(t.startsAt).getTime(),
        o = Date.now(),
        r = s <= o && o - s < 2 * i.A.Millis.DAY;
    if (n) return null;
    switch (e) {
        case a.UA.UNENROLLED:
            if (r) return u.intl.string(u.t.X6ziWN);
            return null;
        case a.UA.COMPLETED:
        case a.UA.EXPIRED_CLAIMABLE:
        case a.UA.CLAIMED:
            return u.intl.string(u.t.uOGFB6);
        case a.UA.EXPIRED:
            return u.intl.string(u.t["zX/gnV"]);
        default:
            return null;
    }
}
function A(t, e, n, s) {
    switch (t) {
        case a.UA.UNENROLLED:
            if (s) return u.intl.string(u.t.G6np6x);
        case a.UA.ENROLLED:
        case a.UA.INCOMPLETE:
            if (null != n) return `${n.progress}/${n.target}`;
            return (0, o.xm)(e);
        case a.UA.COMPLETED:
        case a.UA.CLAIMED:
        case a.UA.EXPIRED:
        case a.UA.EXPIRED_CLAIMABLE:
            return null;
    }
}
