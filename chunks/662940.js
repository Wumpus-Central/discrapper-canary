n.d(e, { C0: () => E, CK: () => T, Dd: () => A, UK: () => C, pv: () => c, vj: () => d });
var s,
    i = n(927813),
    o = n(792620),
    u = n(814793),
    r = n(79545),
    a = n(190107),
    l = n(375708),
    C =
        21552 == n.j
            ? (((s = {})[(s.PLAY = 0)] = "PLAY"),
              (s[(s.WATCH = 1)] = "WATCH"),
              (s[(s.ACTIVITY = 2)] = "ACTIVITY"),
              (s[(s.INSTANT_PLAY = 3)] = "INSTANT_PLAY"),
              (s[(s.ARENA = 4)] = "ARENA"),
              s)
            : null;
function c(t) {
    return (0, o.GL)(t)
        ? 4 * !!(0, u.ui)(t)
        : (0, o.vv)(t)
          ? 1
          : (0, o.Ki)(t)
            ? t.config.features.includes(a.Li.CLOUD_GAMING_ACTIVITY)
                ? 3
                : 2
            : 0;
}
function E(t) {
    switch (c(t)) {
        case 0:
            return l.intl.string(l.t.U7cCLU);
        case 1:
            return l.intl.string(l.t.kfks9Y);
        case 2:
            return l.intl.string(l.t.U0sDwa);
        case 3:
            return l.intl.string(l.t.V5Qt9D);
        case 4:
            return l.intl.string(l.t.P1uOM8);
    }
}
function d(t) {
    switch (c(t)) {
        case 3:
            return l.intl.string(l.t.C2kQR8);
        case 1:
            return l.intl.string(l.t.PMVy7M);
        case 2:
            return l.intl.string(l.t.RPSnmI);
        default:
            return l.intl.string(l.t.cfY4PE);
    }
}
function A(t, e, n) {
    let s = new Date(t.startsAt).getTime(),
        o = Date.now(),
        u = s <= o && o - s < 2 * i.A.Millis.DAY;
    if (n) return null;
    switch (e) {
        case r.UA.UNENROLLED:
            if (u) return l.intl.string(l.t.X6ziWN);
            return null;
        case r.UA.COMPLETED:
        case r.UA.EXPIRED_CLAIMABLE:
            return l.intl.string(l.t.Zq6s9k);
        case r.UA.CLAIMED:
            return l.intl.string(l.t.uOGFB6);
        case r.UA.EXPIRED:
            return l.intl.string(l.t["zX/gnV"]);
        default:
            return null;
    }
}
function T(t, e, n, s) {
    switch (t) {
        case r.UA.UNENROLLED:
            if (s) return l.intl.string(l.t.G6np6x);
        case r.UA.ENROLLED:
        case r.UA.INCOMPLETE:
            if (null != n) return `${n.progress}/${n.target}`;
            return (0, o.xm)(e);
        case r.UA.COMPLETED:
        case r.UA.CLAIMED:
        case r.UA.EXPIRED:
        case r.UA.EXPIRED_CLAIMABLE:
            return null;
    }
}
