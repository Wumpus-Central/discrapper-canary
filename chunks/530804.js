(t.d(n, { $n: () => A, b0: () => C, uy: () => g, vp: () => h }), t(321073));
var u = t(582128),
    l = t(435558),
    r = t(17928),
    s = t(568598),
    i = t(280450),
    c = t(584569),
    f = t(763827),
    d = t(977997),
    a = t(955283),
    o = t(652215);
function A(e, n) {
    let t = (0, r.bG)([c.A, f.A], () => (e === f.A.getChannelId() ? c.A.getDesyncedVoiceStates() : null));
    return u.useMemo(
        () =>
            (function (e, n) {
                if (null == e || 0 === e.length) return n;
                let t = [],
                    u = new Set();
                for (let e of n) (t.push(e), u.add(e.user.id));
                return (
                    e?.forEach((e) => {
                        t.splice(
                            (0, l.sortedIndexBy)(t, e, (e) => {
                                let { comparator: n } = e;
                                return n;
                            }),
                            0,
                            e,
                        );
                    }),
                    t
                );
            })(t, n),
        [t, n],
    );
}
function h(e, n) {
    let t = (0, r.bG)([c.A, f.A], () => (e === f.A.getChannelId() ? c.A.getDesyncedParticipants() : null));
    return u.useMemo(
        () =>
            (function (e, n) {
                if (null == e || 0 === e.length) return n;
                let t = [...n];
                return (
                    e.forEach((e) => {
                        t.splice(
                            (0, l.sortedIndexBy)(t, e, (e) => (0, s.KU)(e)),
                            0,
                            e,
                        );
                    }),
                    t
                );
            })(t, n),
        [t, n],
    );
}
function C(e) {
    let n = (0, r.bG)([i.default], () => i.default.getId() === e),
        { showSelfConnectingUI: t } = a.A.useConfig({ location: "useIsSelfDisconnectedUIVisible" }),
        u = (0, r.bG)([f.A], () => f.A.getState()),
        l = (0, r.bG)([f.A], () => f.A.getWasEverRtcConnected());
    return n && l && u !== o.S7L.RTC_CONNECTED && t;
}
function g(e, n) {
    let t = (0, r.bG)([i.default], () => i.default.getId() === n),
        l = (0, r.bG)([f.A], () => f.A.getChannelId()),
        s = u.useRef(null),
        [c, a] = u.useState(!1),
        [o, A] = u.useState(!1),
        h = (0, r.bG)(
            [f.A, d.A],
            () =>
                null != n &&
                null != e &&
                f.A.getChannelId() === e &&
                null != d.A.isInChannel(e, n) &&
                f.A.isUserConnected(n),
        ),
        C = (0, r.bG)(
            [f.A, d.A],
            () =>
                null != n &&
                null != e &&
                f.A.getChannelId() === e &&
                null != d.A.isInChannel(e, n) &&
                !f.A.isUserConnected(n),
        );
    return (
        u.useEffect(() => {
            h && A(!0);
        }, [h]),
        u.useEffect(() => {
            l !== e && A(!1);
        }, [e, l]),
        u.useEffect(
            () => (
                C && null == s.current
                    ? (s.current = setTimeout(() => {
                          ((s.current = null), a(!0));
                      }, 250))
                    : (clearTimeout(s.current), (s.current = null), a(!1)),
                () => {
                    (clearTimeout(s.current), (s.current = null));
                }
            ),
            [C],
        ),
        !t && o && c
    );
}
