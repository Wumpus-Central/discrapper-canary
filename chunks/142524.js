n.d(t, {
    A: () => P,
}),
    n(896048);
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(311907),
    l = n(80682),
    c = n(643501),
    u = n(338234),
    d = n(376696),
    f = n(616356),
    p = n(961350),
    _ = n(71393),
    h = n(576705),
    m = n(290863),
    g = n(977997),
    E = n(954571),
    y = n(279250),
    b = n(834757),
    O = n(727353),
    v = n(652215),
    A = n(945354);

function I(e, t, n) {
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

function S(e) {
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
                I(e, t, n[t]);
            });
    }
    return e;
}

function T(e, t) {
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

function C(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : T(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}

function N(e, t) {
    if (null == e) return {};
    var n,
        r,
        i,
        a = {};
    if ("u" > typeof Reflect && Reflect.ownKeys) {
        for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++)
            (r = n[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
        return a;
    }
    if (((a = w(e, t)), Object.getOwnPropertySymbols))
        for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++)
            (r = n[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a;
}

function w(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.getOwnPropertyNames(e);
    for (r = 0; r < a.length; r++)
        (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    return i;
}
class R extends i.PureComponent {
    componentDidMount() {
        let { user: e, streamApplication: t } = this.props;
        E.default.track(v.HAw.OPEN_POPOUT, {
            type: "Stream Preview",
            other_user_id: e.id,
            application_id: null != t ? t.id : null,
            application_name: null != t ? t.name : null,
            game_id: null != t ? t.id : null,
            is_streaming: !0,
        });
    }
    render() {
        let {
            activity: e,
            user: t,
            stream: n,
            previewIsOpen: i,
            onAction: a,
            hideTip: o,
            channel: l,
            onWatch: c,
            activeStream: f,
            currentUserId: p,
            canWatch: _,
            unavailableReason: h,
            streamApplication: m,
        } = this.props;
        if (null == n) return null;
        let { enableUserHoverActivities: g } = (0, u.Uw)({
            guildId: null == l ? void 0 : l.guild_id,
            location: "StreamPreviewPopout",
        });
        return (0, r.jsxs)("div", {
            className: s()(A.yt, {
                [A.P0]: i,
            }),
            children: [
                (0, r.jsx)(O.Z, {
                    stream: n,
                    activeStream: f,
                    streamActivity: e,
                    streamApplication: m,
                    user: t,
                    currentUserId: p,
                    canWatch: null != _ && _,
                    unavailableReason: h,
                    onWatchStream: c,
                    onAction: a,
                    hideTip: o,
                    className: A.Rh,
                    wrapperClassName: void 0,
                }),
                g &&
                    null != l &&
                    (0, r.jsx)(d.A, {
                        channel: l,
                        user: t,
                        onAction: a,
                    }),
            ],
        });
    }
}

function P(e) {
    let { user: t, channel: n } = e,
        a = N(e, ["user", "channel"]),
        [s, u] = (0, o.yK)([g.A, _.A, h.A, c.default], () => (0, y.eo)(n, g.A, _.A, h.A, c.default)),
        d = (0, o.bG)([f.A], () => f.A.getStreamForUser(t.id, n.getGuildId())),
        E = (0, o.bG)([f.A], () => f.A.getActiveStreamForApplicationStream(d)),
        O = (0, o.bG)([p.default], () => p.default.getId()),
        v = (0, b.AO)(d),
        A = (0, o.bG)([m.A], () => (0, b.nr)(d, m.A)),
        I = i.useMemo(
            () => ({
                [n.guild_id]: [t.id],
            }),
            [n.guild_id, t.id],
        );
    return (
        (0, l.E)(I, "StreamPreviewPopout"),
        (0, r.jsx)(
            R,
            C(S({}, a), {
                canWatch: s,
                unavailableReason: u,
                user: t,
                streamApplication: v,
                stream: d,
                activeStream: E,
                currentUserId: O,
                activity: A,
                channel: n,
            }),
        )
    );
}
