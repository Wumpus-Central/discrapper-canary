n.d(t, { A: () => j }), n(896048);
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(311907),
    l = n(397927),
    c = n(302959),
    u = n(80682),
    d = n(592182),
    f = n(12351),
    p = n(643501),
    _ = n(616356),
    h = n(961350),
    m = n(71393),
    g = n(576705),
    E = n(290863),
    b = n(977997),
    y = n(954571),
    O = n(279250),
    A = n(834757),
    v = n(877315),
    S = n(607407),
    I = n(652215),
    T = n(985018),
    C = n(945354);
function N(e, t, n) {
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
function R(e) {
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
                N(e, t, n[t]);
            });
    }
    return e;
}
function w(e, t) {
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
function P(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : w(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function D(e, t) {
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
    if (((a = x(e, t)), Object.getOwnPropertySymbols))
        for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++)
            (r = n[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a;
}
function x(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.getOwnPropertyNames(e);
    for (r = 0; r < a.length; r++)
        (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    return i;
}
class L extends i.PureComponent {
    componentDidMount() {
        let { user: e, streamApplication: t } = this.props;
        y.default.track(I.HAw.OPEN_POPOUT, {
            type: "Stream Preview",
            other_user_id: e.id,
            application_id: null != t ? t.id : null,
            application_name: null != t ? t.name : null,
            game_id: null != t ? t.id : null,
            is_streaming: !0,
        });
    }
    renderPreview(e) {
        let { onWatch: t, activeStream: n, currentUserId: i, canWatch: a, unavailableReason: s } = this.props;
        return (0, r.jsxs)(l.DUT, {
            onClick: t,
            className: C.i1,
            children: [
                (0, r.jsx)(S.A, {
                    className: C.oz,
                    stream: e,
                }),
                a
                    ? (0, r.jsx)("div", {
                          className: C.xD,
                          children: (0, r.jsx)(l.Text, {
                              variant: "text-sm/normal",
                              color: "none",
                              className: C.ON,
                              children: (0, v.A)(e, n, i, s),
                          }),
                      })
                    : null,
            ],
        });
    }
    render() {
        let { activity: e, user: t, stream: n, previewIsOpen: i, onAction: a, hideTip: o } = this.props;
        return null == n
            ? null
            : (0, r.jsx)("div", {
                  className: s()(C.yt, { [C.P0]: i }),
                  children: (0, r.jsxs)("div", {
                      className: C.Rh,
                      children: [
                          this.renderPreview(n),
                          (0, r.jsxs)("div", {
                              className: C.rf,
                              children: [
                                  null != e
                                      ? (0, r.jsx)(c.A, {
                                            hideHeader: !0,
                                            type: c.M.STREAM_PREVIEW,
                                            activity: e,
                                            user: t,
                                            guildId: n.guildId,
                                            channelId: n.channelId,
                                            analyticsParams: {
                                                location: {
                                                    page: I.liQ.GO_LIVE_MODAL,
                                                    section: I.JJy.STREAM_VIEWER_POPOUT,
                                                },
                                            },
                                            onAction: a,
                                        })
                                      : (0, r.jsx)(d.A, {
                                            type: c.M.STREAM_PREVIEW,
                                            applicationStream: n,
                                            user: t,
                                            guildId: n.guildId,
                                            channelId: n.channelId,
                                            className: C.lx,
                                            onAction: a,
                                        }),
                                  !o &&
                                      (0, r.jsx)(f.A, {
                                          type: f.A.Types.INLINE,
                                          className: C.PP,
                                          children: __OVERLAY__ ? T.intl.string(T.t.YRdw70) : T.intl.string(T.t.CCTgbF),
                                      }),
                              ],
                          }),
                      ],
                  }),
              });
    }
}
function j(e) {
    let { user: t, channel: n } = e,
        a = D(e, ["user", "channel"]),
        [s, l] = (0, o.yK)([b.A, m.A, g.A, p.default], () => (0, O.eo)(n, b.A, m.A, g.A, p.default)),
        c = (0, o.bG)([_.A], () => _.A.getStreamForUser(t.id, n.getGuildId())),
        d = (0, o.bG)([_.A], () => _.A.getActiveStreamForApplicationStream(c)),
        f = (0, o.bG)([h.default], () => h.default.getId()),
        y = (0, A.AO)(c),
        v = (0, o.bG)([E.A], () => (0, A.nr)(c, E.A)),
        S = i.useMemo(() => ({ [n.guild_id]: [t.id] }), [n.guild_id, t.id]);
    return (
        (0, u.E)(S, "StreamPreviewPopout"),
        (0, r.jsx)(
            L,
            P(R({}, a), {
                canWatch: s,
                unavailableReason: l,
                user: t,
                streamApplication: y,
                stream: c,
                activeStream: d,
                currentUserId: f,
                activity: v,
            }),
        )
    );
}
