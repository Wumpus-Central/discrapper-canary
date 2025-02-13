n.d(t, { Z: () => j }), n(47120);
var l = n(200651),
    i = n(192379),
    r = n(120356),
    a = n.n(r),
    s = n(442837),
    o = n(481060),
    u = n(717881),
    c = n(616780),
    d = n(850827),
    m = n(576855),
    f = n(258609),
    h = n(199902),
    g = n(314897),
    p = n(430824),
    v = n(496675),
    S = n(158776),
    I = n(979651),
    x = n(626135),
    E = n(102172),
    T = n(687516),
    Z = n(718805),
    y = n(871118),
    N = n(981631),
    A = n(388032),
    C = n(951078);
class P extends i.PureComponent {
    componentDidMount() {
        let { user: e, streamApplication: t } = this.props;
        x.default.track(N.rMx.OPEN_POPOUT, {
            type: 'Stream Preview',
            other_user_id: e.id,
            application_id: null != t ? t.id : null,
            application_name: null != t ? t.name : null,
            game_id: null != t ? t.id : null,
            is_streaming: !0
        });
    }
    renderPreview(e) {
        let { onWatch: t, activeStream: n, currentUserId: i, canWatch: r, unavailableReason: a } = this.props;
        return (0, l.jsxs)(o.P3F, {
            onClick: t,
            className: C.previewContainer,
            children: [
                (0, l.jsx)(y.Z, {
                    className: C.previewImage,
                    stream: e
                }),
                r
                    ? (0, l.jsx)('div', {
                          className: C.previewHover,
                          children: (0, l.jsx)(o.Text, {
                              variant: 'text-sm/normal',
                              color: 'none',
                              className: C.white,
                              children: (0, Z.Z)(e, n, i, a)
                          })
                      })
                    : null
            ]
        });
    }
    render() {
        let { activity: e, user: t, stream: n, previewIsOpen: i, onAction: r, hideTip: s } = this.props;
        return null == n
            ? null
            : (0, l.jsx)('div', {
                  className: a()(C.streamPreviewWrapper, { [C.mounted]: i }),
                  children: (0, l.jsxs)('div', {
                      className: C.streamPreview,
                      children: [
                          this.renderPreview(n),
                          (0, l.jsxs)('div', {
                              className: C.body,
                              children: [
                                  null != e
                                      ? (0, l.jsx)(u.Z, {
                                            hideHeader: !0,
                                            type: u.P.STREAM_PREVIEW,
                                            activity: e,
                                            user: t,
                                            guildId: n.guildId,
                                            channelId: n.channelId,
                                            analyticsParams: {
                                                location: {
                                                    page: N.ZY5.GO_LIVE_MODAL,
                                                    section: N.jXE.STREAM_VIEWER_POPOUT
                                                }
                                            },
                                            onAction: r
                                        })
                                      : (0, l.jsx)(d.Z, {
                                            type: u.P.STREAM_PREVIEW,
                                            applicationStream: n,
                                            user: t,
                                            guildId: n.guildId,
                                            channelId: n.channelId,
                                            className: C.activityActions,
                                            color: C.watchButton,
                                            onAction: r
                                        }),
                                  !s &&
                                      (0, l.jsx)(m.Z, {
                                          type: m.Z.Types.INLINE,
                                          className: C.protip,
                                          children: __OVERLAY__ ? A.intl.string(A.t['YRdw7+']) : A.intl.string(A.t.CCTgbG)
                                      })
                              ]
                          })
                      ]
                  })
              });
    }
}
function j(e) {
    let { user: t, channel: n, ...r } = e,
        [a, o] = (0, s.Wu)([I.Z, p.Z, v.Z, f.Z], () => (0, E.p9)(n, I.Z, p.Z, v.Z, f.Z)),
        u = (0, s.e7)([h.Z], () => h.Z.getStreamForUser(t.id, n.getGuildId())),
        d = (0, s.e7)([h.Z], () => h.Z.getActiveStreamForApplicationStream(u)),
        m = (0, s.e7)([g.default], () => g.default.getId()),
        x = (0, T.Cf)(u),
        Z = (0, s.e7)([S.Z], () => (0, T.Um)(u, S.Z)),
        y = i.useMemo(() => ({ [n.guild_id]: [t.id] }), [n.guild_id, t.id]);
    return (
        (0, c.$)(y),
        (0, l.jsx)(P, {
            ...r,
            canWatch: a,
            unavailableReason: o,
            user: t,
            streamApplication: x,
            stream: u,
            activeStream: d,
            currentUserId: m,
            activity: Z
        })
    );
}
