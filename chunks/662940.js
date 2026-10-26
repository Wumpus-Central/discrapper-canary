n.d(e, { C0: () => d, CK: () => A, Dd: () => x, UK: () => c, pv: () => C, vj: () => E });
var s,
    i = n(927813),
    r = n(792620),
    a = n(814793),
    o = n(79545),
    l = n(190107),
    u = n(105292),
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
    return (0, r.GL)(t)
        ? 4 * !!(0, a.ui)(t)
        : (0, r.vv)(t)
          ? 1
          : (0, r.Ki)(t)
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
        r = Date.now(),
        a = s <= r && r - s < 2 * i.A.Millis.DAY;
    if (n) return null;
    switch (e) {
        case o.UA.UNENROLLED:
            if (a) return u.intl.string(u.t.X6ziWN);
            return null;
        case o.UA.COMPLETED:
        case o.UA.EXPIRED_CLAIMABLE:
        case o.UA.CLAIMED:
            return u.intl.string(u.t.uOGFB6);
        case o.UA.EXPIRED:
        case o.UA.EXPIRED_CLAIMED:
            return u.intl.string(u.t["zX/gnV"]);
        default:
            return null;
    }
}
function A(t, e, n, s) {
    switch (t) {
        case o.UA.UNENROLLED:
            if (s) return u.intl.string(u.t.G6np6x);
        case o.UA.ENROLLED:
        case o.UA.INCOMPLETE:
            if (null != n) return `${n.progress}/${n.target}`;
            return (0, r.xm)(e);
        case o.UA.COMPLETED:
        case o.UA.CLAIMED:
        case o.UA.EXPIRED:
        case o.UA.EXPIRED_CLAIMABLE:
        case o.UA.EXPIRED_CLAIMED:
            return null;
    }
}
