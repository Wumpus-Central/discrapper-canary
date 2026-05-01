n.d(t, { A: () => $ });
var l = n(627968),
    i = n(64700),
    s = n(922016),
    a = n(365199),
    r = n(688810),
    o = n(17928),
    c = n(550079),
    u = n(477782),
    d = n(587895),
    A = n(73883),
    E = n(267102),
    m = n(284009),
    h = n.n(m),
    C = n(313961);
n(286710);
var g = n(422229),
    I = n(74329),
    p = n(249288),
    x = n(228366);
let T = {
    setCallChatToastsEnabled(e, t) {
        x.h.dispatch({ type: "CALL_CHAT_TOASTS_SET_ENABLED", channelId: e, toastsEnabled: t });
    },
};
var _ = n(985018),
    v = n(288104),
    N = n(661504),
    f = n(769591),
    j = n(734057),
    S = n(576705),
    b = n(993838),
    O = n(233993),
    y = n(446600),
    L = n(418208),
    M = n(806931),
    R = n(71393),
    D = n(534963),
    P = n(470710),
    G = n(717518),
    k = n(367513),
    U = n(854182),
    V = n(241541),
    B = n(283973),
    H = n(520006),
    w = n(652215),
    K = n(138134),
    F = n(928658),
    Y = n(470743);
function X(e) {
    var t;
    let n,
        s,
        a,
        r,
        m,
        x,
        X,
        z,
        W,
        J,
        q,
        $,
        Q,
        Z,
        ee,
        et,
        en,
        el,
        ei,
        { onClose: es, onSelect: ea, channel: er, remoteMode: eo, onInteraction: ec } = e,
        eu = (0, E.Us)(),
        { id: ed, type: eA } = er,
        eE = (0, o.bG)([R.A], () => R.A.getGuild(er.guild_id), [er.guild_id]),
        em = (0, o.bG)([C.A], () => C.A.getSelectedParticipant(ed)),
        eh = em?.type === M.lp.STREAM ? em.stream : null,
        eC = (0, o.bG)([d.A], () => (em?.type === M.lp.ACTIVITY ? d.A.getApplication(em.applicationId) : void 0)),
        eg = (0, U.A)(ed),
        eI =
            ((n = (0, o.bG)([p.A], () => p.A.getToastsEnabled(ed))),
            (0, l.jsx)(u.sL, {
                id: "show-call-chat-toasts",
                label: _.intl.string(_.t["5NL5vT"]),
                checked: n,
                action: () => T.setCallChatToastsEnabled(ed, !n),
            })),
        ep =
            ((s = { streamUserId: eh?.ownerId, channel: er, applicationId: (t = eC?.id), appContext: (0, E.Us)() }),
            (a = () => {
                null != eE &&
                    er.type === w.rbe.GUILD_VOICE &&
                    (0, H.X)({ guild: eE, source: w.PE1.VOICE_CHANNEL_CALL_MENU_ITEM, ...s });
            }),
            null != t
                ? (0, l.jsx)(u.Dr, {
                      id: "invite-to-stream",
                      label: _.intl.string(_.t["OzOM/q"]),
                      action: a,
                      icon: V.D,
                      leadingAccessory: { type: "icon", icon: V.D },
                  })
                : null != eE && null != er && S.A.can(w.xBc.CREATE_INSTANT_INVITE, er)
                  ? (0, l.jsx)(u.Dr, {
                        id: "invite-friends",
                        label: _.intl.string(_.t["EE+P0H"]),
                        action: a,
                        icon: B.R,
                        leadingAccessory: { type: "icon", icon: B.R },
                    })
                  : null),
        ex = (function (e) {
            let { selectedParticipant: t } = (0, o.cf)(
                [C.A],
                () => ({ selectedParticipant: C.A.getSelectedParticipant(e) }),
                [e],
            );
            return (0, l.jsx)(u.sL, {
                id: "call-grid-view",
                label: _.intl.string(_.t["3jrUBj"]),
                checked: null == t,
                action: () => {
                    null != t ? k.A.selectParticipant(e, null) : k.A.selectParticipant(e, M.jd.AUTO);
                },
            });
        })(ed),
        eT = (0, Y.A)(),
        e_ =
            ((r = (0, o.bG)([j.A], () => j.A.getChannel(ed), [ed])),
            (m = (0, o.bG)([S.A], () => S.A.can(O.QY, r))),
            (x = (0, L.zU)()),
            (X = (0, o.bG)([y.A], () => y.A.getStageInstanceByChannel(ed), [ed])),
            (z = (0, E.Us)()),
            r?.isGuildStageVoice() && m && !x
                ? null != X
                    ? (0, l.jsx)(u.Dr, {
                          id: "edit-stage",
                          label: _.intl.string(_.t["I+9bLx"]),
                          action: () => {
                              null != r && (0, b.tQ)(r, z);
                          },
                      })
                    : (0, l.jsx)(u.Dr, {
                          id: "start-stage",
                          label: _.intl.string(_.t.OYbHfv),
                          action: () => {
                              null != r && (0, b.tQ)(r, z);
                          },
                      })
                : null),
        ev =
            ((W = (0, o.bG)([j.A], () => j.A.getChannel(ed), [ed])),
            h()(null != W, "useNotificationSettingsItem: channel cannot be undefined"),
            (J = (0, f.os)("StageChannelCallOverflowMenu")),
            (q = (0, N.Ay)(W)),
            ($ = (0, v.A)(W)),
            J ? q : $),
        eN = (0, I.A)(eh, eu),
        ef =
            ((Q = (0, o.bG)([j.A], () => j.A.getChannel(ed))),
            (Z = Q?.getGuildId()),
            null == eC
                ? null
                : (0, l.jsx)(u.rX, {
                      children: (0, l.jsx)(u.Dr, {
                          id: "report-app",
                          color: "danger",
                          label: _.intl.string(_.t.NgA5vp),
                          action: () =>
                              (0, F.r3)({
                                  application: eC,
                                  entrypoint: "activity_ui_channel_call",
                                  contextualGuildId: Z ?? void 0,
                                  contextualChannelId: Q?.id,
                              }),
                          icon: K.i,
                          leadingAccessory: { type: "icon", icon: K.i },
                      }),
                  })),
        ej = (0, g.A)(),
        eS = (0, A.A)(er),
        eb =
            ((ee = (0, o.bG)([P.A], () => P.A.getCall(ed), [ed])),
            (et = (0, o.bG)([G.A], () => G.A.getRegions(null))),
            i.useEffect(() => {
                null == et && D.A.fetchRegions(null);
            }, [et]),
            (en = i.useMemo(
                () =>
                    null != ee && ee.regionUpdated && null != et && null != ee.region
                        ? (et.find((e) => {
                              let { id: t } = e;
                              return t === ee.region;
                          }) ?? { name: ee.region, id: ee.region })
                        : { id: "automatic", name: _.intl.string(_.t.JEmsap) },
                [ee, et],
            )),
            (el = i.useCallback(
                (e) => {
                    null != ee && D.A.changeCallRegion(ee.channelId, e.id);
                },
                [ee],
            )),
            (ei = i.useMemo(
                () =>
                    null == et || 0 === et.length
                        ? null
                        : et.map((e) => {
                              let { id: t, name: n } = e;
                              return (0, l.jsx)(
                                  u.iD,
                                  {
                                      id: `region-${t}`,
                                      group: "region-select",
                                      label: n,
                                      checked: t === en.id,
                                      action: () => el(e),
                                  },
                                  `region-${t}`,
                              );
                          }),
                [et, en, el],
            )),
            (0, l.jsx)(u.Dr, {
                id: "region-select",
                label: _.intl.string(_.t.w8gMqh),
                subtext: en.name,
                children: ei,
            }));
    return (0, l.jsxs)(c.W, {
        "data-menu-migrated": !0,
        onClose: es,
        onSelect: ea,
        onInteraction: ec,
        navId: "more-settings-context",
        "aria-label": _.intl.string(_.t.FTLzdR),
        children: [
            (0, l.jsx)(u.rX, { children: eA !== w.rbe.GUILD_STAGE_VOICE ? ep : null }),
            (0, l.jsxs)(u.rX, {
                children: [
                    eA === w.rbe.GUILD_STAGE_VOICE ? e_ : null,
                    eA === w.rbe.GUILD_STAGE_VOICE ? ev : null,
                    eo || eA === w.rbe.GUILD_STAGE_VOICE ? null : ex,
                    ej,
                    eA !== w.rbe.GUILD_STAGE_VOICE ? eg : null,
                    eA === w.rbe.GUILD_STAGE_VOICE || eA === w.rbe.GUILD_VOICE ? eI : null,
                ],
            }),
            (0, l.jsx)(u.rX, { children: eS }),
            (0, l.jsxs)(u.rX, { children: [eT, !er.isManaged() && er.isPrivate() ? eb : null] }),
            (0, l.jsxs)(u.rX, { children: [null != eh ? eN : null, null != eC ? ef : null] }),
        ],
    });
}
var z = n(384059),
    W = n(480890),
    J = n(246356),
    q = n(709562);
let $ = (e) => {
    let { channel: t, remoteMode: n = !1 } = e,
        { parentAnalyticsLocation: o } = (0, r.Ay)(),
        c = i.useRef(null);
    return (0, l.jsx)(s.Y, {
        targetElementRef: c,
        renderPopout: (e) => {
            let { closePopout: i } = e;
            return (0, l.jsx)(J.A, {
                children: (0, l.jsx)(X, {
                    onClose: i,
                    channel: t,
                    remoteMode: n,
                    onInteraction: (0, W.s)("MoreSettingsMenu", o, { entrypoint: M.GK.THREE_DOT }),
                }),
            });
        },
        align: "right",
        position: "top",
        animation: s.Y.Animation.FADE,
        spacing: 16,
        children: (e, t) => {
            let { onClick: n } = e,
                { isShown: i } = t;
            return (0, l.jsx)(q.l, {
                ref: c,
                isTrayButton: !0,
                onClick: (e) => {
                    (0, z.X)(o, z.O.MORE), n(e);
                },
                label: _.intl.string(_.t.PdRCRg),
                iconComponent: a.j,
                color: "primaryDark",
                isActive: i,
            });
        },
    });
};
