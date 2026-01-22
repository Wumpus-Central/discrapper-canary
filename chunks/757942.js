n.d(t, {
    A: () => I,
}),
    n(896048);
var r = n(627968);
n(64700);
var i = n(735438),
    a = n.n(i),
    s = n(397927),
    o = n(310953),
    l = n(366811),
    c = n(808728),
    u = n(967198),
    d = n(711014),
    f = n(645959),
    p = n(203982),
    _ = n(265422),
    h = n(652215),
    m = n(790782);

function g(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}

function E(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                g(e, t, n[t]);
            });
    }
    return e;
}

function b(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}

function y(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : b(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}

function O(e, t) {
    let n = [h.ME, ...d.Ay.getFlattenedGuildIds()],
        r = n.indexOf(e);
    return t > 0 ? n.slice(r).concat(n.slice(0, r), e) : (n.splice(r, 0, e), n.slice(r + 1).concat(n.slice(0, r + 1)));
}

function A(e, t) {
    return e === h.ME
        ? f.A.getPrivateChannelIds()
        : (0, o.A)(e, {
              withVoiceChannels: t,
              withCurrentVoiceChannel: !0,
          }).map((e) => e.id);
}

function v(e, t) {
    return [
        {
            resourceId: e,
            type: m.P.GUILD_EVENT,
        },
        ...A(e, t),
    ];
}

function S(e, t) {
    var i, a;
    let o,
        {
            channelPredicate: d = () => !0,
            guildPredicate: f = () => !0,
            guildFeaturePredicate: m = () => !1,
            ensureChatIsVisible: g = () => !1,
            withVoiceChannels: b = !1,
        } = t,
        A = null != (i = l.A.getState().guildId) ? i : h.ME,
        S = l.A.getState().channelId,
        I = O(A, e),
        T = e > 0 ? 0 : I.length - 1,
        C = v(A, b),
        N = C.indexOf(S) + e;
    for (; null != A && "" !== A; ) {
        if (((o = C[N]), f(A)))
            for (; null != o && "" !== o; ) {
                if ("string" == typeof o) {
                    if (d(A, o)) return (0, _.i)(A, o, !1, g(A, o));
                } else if ("object" == typeof o && m(o.resourceId, o.type))
                    return (
                        A !== u.A.getGuildId() && (0, _.i)(A, null == (a = c.Ay.getDefaultChannel(A)) ? void 0 : a.id),
                        (0, s.mMO)(async () => {
                            let { default: e } = await Promise.all([n.e("26589"), n.e("7453"), n.e("27728")]).then(
                                n.bind(n, 926956),
                            );
                            return (t) =>
                                (0, r.jsx)(
                                    e,
                                    y(E({}, t), {
                                        guildId: A,
                                    }),
                                );
                        })
                    );
                (N += e), (o = C[N]);
            }
        if (((T += e), null == (A = I[T]) || "" === A)) break;
        (C = v(A, b)), (N = e < 0 ? C.length - 1 : 0);
    }
    p._.dispatch(h.jej.SHAKE_APP, {
        duration: 200,
        intensity: 2,
    });
}
let I = a().throttle(S, h.ugG);
