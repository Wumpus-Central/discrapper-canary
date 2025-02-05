n.d(t, { Z: () => P }), n(47120);
var l = n(200651),
    i = n(192379),
    r = n(120356),
    a = n.n(r),
    s = n(442837),
    o = n(481060),
    c = n(717881),
    u = n(616780),
    d = n(850827),
    m = n(576855),
    p = n(258609),
    h = n(199902),
    g = n(314897),
    f = n(430824),
    v = n(496675),
    S = n(158776),
    x = n(979651),
    I = n(626135),
    y = n(102172),
    T = n(687516),
    N = n(718805),
    A = n(871118),
    E = n(981631),
    Z = n(388032),
    C = n(846450);
class j extends i.PureComponent {
    componentDidMount() {
        let { user: e, streamApplication: t } = this.props;
        I.default.track(E.rMx.OPEN_POPOUT, {
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
                (0, l.jsx)(A.Z, {
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
                              children: (0, N.Z)(e, n, i, a)
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
                                      ? (0, l.jsx)(c.Z, {
                                            hideHeader: !0,
                                            type: c.P.STREAM_PREVIEW,
                                            activity: e,
                                            user: t,
                                            guildId: n.guildId,
                                            channelId: n.channelId,
                                            analyticsParams: {
                                                location: {
                                                    page: E.ZY5.GO_LIVE_MODAL,
                                                    section: E.jXE.STREAM_VIEWER_POPOUT
                                                }
                                            },
                                            onAction: r
                                        })
                                      : (0, l.jsx)(d.Z, {
                                            type: c.P.STREAM_PREVIEW,
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
                                          children: __OVERLAY__ ? Z.intl.string(Z.t['YRdw7+']) : Z.intl.string(Z.t.CCTgbG)
                                      })
                              ]
                          })
                      ]
                  })
              });
    }
}
function P(e) {
    let { user: t, channel: n, ...r } = e,
        [a, o] = (0, s.Wu)([x.Z, f.Z, v.Z, p.Z], () => (0, y.p9)(n, x.Z, f.Z, v.Z, p.Z)),
        c = (0, s.e7)([h.Z], () => h.Z.getStreamForUser(t.id, n.getGuildId())),
        d = (0, s.e7)([h.Z], () => h.Z.getActiveStreamForApplicationStream(c)),
        m = (0, s.e7)([g.default], () => g.default.getId()),
        I = (0, T.Cf)(c),
        N = (0, s.e7)([S.Z], () => (0, T.Um)(c, S.Z)),
        A = i.useMemo(() => ({ [n.guild_id]: [t.id] }), [n.guild_id, t.id]);
    return (
        (0, u.$)(A),
        (0, l.jsx)(j, {
            ...r,
            canWatch: a,
            unavailableReason: o,
            user: t,
            streamApplication: I,
            stream: c,
            activeStream: d,
            currentUserId: m,
            activity: N
        })
    );
}
