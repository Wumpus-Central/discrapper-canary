n.d(t, {
    Es: function () {
        return d;
    },
    Eu: function () {
        return f;
    },
    bt: function () {
        return m;
    }
}),
    n(47120),
    n(653041);
var i = n(192379),
    l = n(392711),
    a = n(442837),
    r = n(413523),
    s = n(314897),
    o = n(878884),
    c = n(19780),
    u = n(979651);
function d(e, t) {
    let n = (0, a.e7)([o.Z, c.Z], () => (e === c.Z.getChannelId() ? o.Z.getDesyncedVoiceStates() : null));
    return i.useMemo(
        () =>
            (function (e, t) {
                if (null == e || 0 === e.length) return t;
                let n = [],
                    i = new Set();
                for (let e of t) n.push(e), i.add(e.user.id);
                return (
                    e.forEach((e) => {
                        n.splice(
                            (0, l.sortedIndexBy)(n, e, (e) => {
                                let { comparator: t } = e;
                                return t;
                            }),
                            0,
                            e
                        );
                    }),
                    n
                );
            })(n, t),
        [n, t]
    );
}
function m(e, t) {
    var n;
    let s = ((n = e), (0, a.e7)([o.Z, c.Z], () => (n === c.Z.getChannelId() ? o.Z.getDesyncedParticipants() : null)));
    return i.useMemo(
        () =>
            (function (e, t) {
                if (null == e || 0 === e.length) return t;
                let n = [...t];
                return (
                    e.forEach((e) => {
                        n.splice(
                            (0, l.sortedIndexBy)(n, e, (e) => (0, r.Yr)(e)),
                            0,
                            e
                        );
                    }),
                    n
                );
            })(s, t),
        [s, t]
    );
}
function f(e, t) {
    let n = (0, a.e7)([s.default], () => s.default.getId() === t),
        l = (0, a.e7)([c.Z], () => c.Z.getChannelId()),
        r = i.useRef(null),
        [o, d] = i.useState(!1),
        [m, f] = i.useState(!1),
        p = (0, a.e7)([c.Z, u.Z], () => null != t && null != e && c.Z.getChannelId() === e && null != u.Z.isInChannel(e, t) && c.Z.isUserConnected(t)),
        h = (0, a.e7)([c.Z, u.Z], () => null != t && null != e && c.Z.getChannelId() === e && null != u.Z.isInChannel(e, t) && !c.Z.isUserConnected(t));
    return (
        i.useEffect(() => {
            p && f(!0);
        }, [p]),
        i.useEffect(() => {
            l !== e && f(!1);
        }, [e, l]),
        i.useEffect(
            () => (
                h && null == r.current
                    ? (r.current = setTimeout(() => {
                          (r.current = null), d(!0);
                      }, 250))
                    : (clearTimeout(r.current), (r.current = null), d(!1)),
                () => {
                    clearTimeout(r.current), (r.current = null);
                }
            ),
            [h]
        ),
        !n && m && o
    );
}
