n.d(t, { Z: () => j }), n(388685);
var r = n(54381),
    i = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(442837),
    l = n(481060),
    c = n(350922),
    u = n(616780),
    d = n(850827),
    f = n(576855),
    p = n(258609),
    _ = n(199902),
    m = n(314897),
    h = n(430824),
    g = n(496675),
    E = n(158776),
    b = n(979651),
    y = n(626135),
    O = n(102172),
    v = n(687516),
    S = n(718805),
    I = n(871118),
    T = n(981631),
    C = n(388032),
    A = n(724506);
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
function P(e) {
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
function R(e, t) {
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
function w(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : R(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function D(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = x(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++)
            (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function x(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
class L extends i.PureComponent {
    componentDidMount() {
        let { user: e, streamApplication: t } = this.props;
        y.default.track(T.rMx.OPEN_POPOUT, {
            type: "Stream Preview",
            other_user_id: e.id,
            application_id: null != t ? t.id : null,
            application_name: null != t ? t.name : null,
            game_id: null != t ? t.id : null,
            is_streaming: !0,
        });
    }
    renderPreview(e) {
        let { onWatch: t, activeStream: n, currentUserId: i, canWatch: a, unavailableReason: o } = this.props;
        return (0, r.jsxs)(l.P3F, {
            onClick: t,
            className: A.previewContainer,
            children: [
                (0, r.jsx)(I.Z, {
                    className: A.previewImage,
                    stream: e,
                }),
                a
                    ? (0, r.jsx)("div", {
                          className: A.previewHover,
                          children: (0, r.jsx)(l.Text, {
                              variant: "text-sm/normal",
                              color: "none",
                              className: A.white,
                              children: (0, S.Z)(e, n, i, o),
                          }),
                      })
                    : null,
            ],
        });
    }
    render() {
        let { activity: e, user: t, stream: n, previewIsOpen: i, onAction: a, hideTip: s } = this.props;
        return null == n
            ? null
            : (0, r.jsx)("div", {
                  className: o()(A.streamPreviewWrapper, { [A.mounted]: i }),
                  children: (0, r.jsxs)("div", {
                      className: A.streamPreview,
                      children: [
                          this.renderPreview(n),
                          (0, r.jsxs)("div", {
                              className: A.body,
                              children: [
                                  null != e
                                      ? (0, r.jsx)(c.Z, {
                                            hideHeader: !0,
                                            type: c.P.STREAM_PREVIEW,
                                            activity: e,
                                            user: t,
                                            guildId: n.guildId,
                                            channelId: n.channelId,
                                            analyticsParams: {
                                                location: {
                                                    page: T.ZY5.GO_LIVE_MODAL,
                                                    section: T.jXE.STREAM_VIEWER_POPOUT,
                                                },
                                            },
                                            onAction: a,
                                        })
                                      : (0, r.jsx)(d.Z, {
                                            type: c.P.STREAM_PREVIEW,
                                            applicationStream: n,
                                            user: t,
                                            guildId: n.guildId,
                                            channelId: n.channelId,
                                            className: A.activityActions,
                                            onAction: a,
                                        }),
                                  !s &&
                                      (0, r.jsx)(f.Z, {
                                          type: f.Z.Types.INLINE,
                                          className: A.protip,
                                          children: __OVERLAY__ ? C.intl.string(C.t.YRdw70) : C.intl.string(C.t.CCTgbF),
                                      }),
                              ],
                          }),
                      ],
                  }),
              });
    }
}
function j(e) {
    var { user: t, channel: n } = e,
        a = D(e, ["user", "channel"]);
    let [o, l] = (0, s.Wu)([b.Z, h.Z, g.Z, p.default], () => (0, O.p9)(n, b.Z, h.Z, g.Z, p.default)),
        c = (0, s.e7)([_.Z], () => _.Z.getStreamForUser(t.id, n.getGuildId())),
        d = (0, s.e7)([_.Z], () => _.Z.getActiveStreamForApplicationStream(c)),
        f = (0, s.e7)([m.default], () => m.default.getId()),
        y = (0, v.Cf)(c),
        S = (0, s.e7)([E.Z], () => (0, v.Um)(c, E.Z)),
        I = i.useMemo(() => ({ [n.guild_id]: [t.id] }), [n.guild_id, t.id]);
    return (
        (0, u.$)(I, "StreamPreviewPopout"),
        (0, r.jsx)(
            L,
            w(P({}, a), {
                canWatch: o,
                unavailableReason: l,
                user: t,
                streamApplication: y,
                stream: c,
                activeStream: d,
                currentUserId: f,
                activity: S,
            }),
        )
    );
}
