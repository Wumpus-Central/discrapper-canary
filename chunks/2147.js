n.d(t, {
    G: () => eA,
    Z: () => eD,
}),
    n(997841),
    n(953529),
    n(290780);
var i = n(951288),
    l = n(647438),
    r = n(120356),
    s = n.n(r),
    a = n(913527),
    o = n.n(a),
    c = n(313361),
    d = n(697988),
    u = n(683860),
    h = n(442837),
    g = n(692547),
    p = n(886025),
    m = n(780384),
    f = n(755721),
    b = n(481060),
    x = n(787014),
    j = n(771340),
    v = n(410575),
    y = n(852860),
    C = n(129865),
    N = n(902840),
    S = n(622822),
    E = n(933557),
    O = n(541716),
    Z = n(752305),
    w = n(893718),
    T = n(87432),
    R = n(600164),
    _ = n(313201),
    I = n(318766),
    P = n(907040),
    A = n(906411),
    L = n(633302),
    M = n(109434),
    D = n(162389),
    k = n(946458),
    B = n(968437),
    V = n(665906),
    H = n(456077),
    U = n(747212),
    G = n(210887),
    W = n(131704),
    z = n(601964),
    F = n(314897),
    X = n(388610),
    q = n(430824),
    J = n(496675),
    Q = n(903223),
    Y = n(594174),
    K = n(934415),
    $ = n(55935),
    ee = n(70956),
    et = n(630388),
    en = n(63063),
    ei = n(129724),
    el = n(732335),
    er = n(296146),
    es = n(564735),
    ea = n(981631),
    eo = n(176505),
    ec = n(185923),
    ed = n(710352),
    eu = n(124368),
    eh = n(388032),
    eg = n(257294),
    ep = n(197571);
function em(e, t, n) {
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
function ef(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            i.forEach(function (t) {
                em(e, t, n[t]);
            });
    }
    return e;
}
function eb(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var i = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, i);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let ex = (0, _.hQ)(),
    ej = (0, _.hQ)(),
    ev = (0, _.hQ)(),
    ey = (0, _.hQ)(),
    eC = (0, _.hQ)(),
    eN = (0, _.hQ)(),
    eS = (0, _.hQ)(),
    eE = (0, _.hQ)(),
    eO = (0, _.hQ)(),
    eZ = (0, _.hQ)(),
    ew = (0, _.hQ)(),
    eT = (0, W.kt)({
        id: "1",
        type: ea.d4z.DM,
    }),
    eR = {
        popoutLocation: {
            page: ea.ZY5.CHANNEL_SETTINGS,
            section: ea.jXE.CHANNEL_DEFAULT_REACTION,
            object: ea.qAy.EMOJI_PICKER_BUTTON,
        },
    },
    e_ = {
        popoutLocation: {
            page: ea.ZY5.CHANNEL_SETTINGS,
            section: ea.jXE.CHANNEL_NAME,
            object: ea.qAy.EMOJI_PICKER_BUTTON,
        },
    },
    eI = "AUTOMATIC_RTC_REGION",
    eP = {
        breakingChangeDate: (0, $.vc)(o()(ea.zQD), "LL"),
        helpCenterLink: en.Z.getArticleURL(ea.BhN.SLOWMODE),
    },
    eA = h.ZP.connectStores([X.Z], () => {
        let { channel: e, submitting: t } = X.Z.getProps();
        return {
            channel: e,
            submitting: t,
            onReset() {
                null != e && (0, x.S1)(e.id);
            },
            onSave() {
                if (null == e) return;
                let {
                    name: t,
                    type: n,
                    topic: i,
                    bitrate: l,
                    userLimit: r,
                    nsfw: s,
                    flags: a,
                    rateLimitPerUser: o,
                    defaultThreadRateLimitPerUser: c,
                    threadMetadata: d,
                    defaultAutoArchiveDuration: u,
                    template: h,
                    rtcRegion: g,
                    videoQualityMode: p,
                    defaultReactionEmoji: m,
                    availableTags: f,
                    defaultSortOrder: b,
                    defaultForumLayout: j,
                    defaultTagSetting: v,
                } = e;
                e.isThread() && (t = (0, H.Z)(t, !0)),
                    (0, x.wk)(e.id, {
                        name: t,
                        type: n,
                        topic: i,
                        bitrate: l,
                        userLimit: r,
                        nsfw: s,
                        flags: a,
                        rateLimitPerUser: o,
                        defaultThreadRateLimitPerUser: c,
                        autoArchiveDuration: null == d ? void 0 : d.autoArchiveDuration,
                        locked: null == d ? void 0 : d.locked,
                        invitable: null == d ? void 0 : d.invitable,
                        defaultAutoArchiveDuration: u,
                        template: h,
                        rtcRegion: g,
                        videoQualityMode: p,
                        defaultReactionEmoji: m,
                        availableTags: f,
                        defaultSortOrder: b,
                        defaultForumLayout: j,
                        defaultTagSetting: v,
                    });
            },
        };
    })(y.Z);
function eL(e) {
    let { onEmojiPicked: t, channel: n, guildId: r } = e,
        s = l.useRef(null),
        a = l.useCallback(
            (e) => {
                let { closePopout: l } = e;
                return (0, i.jsx)(P.Z, {
                    channel: n,
                    guildId: r,
                    pickerIntention: ec.Hz.CHANNEL_NAME,
                    closePopout: l,
                    onNavigateAway: l,
                    onSelectEmoji: (e) => {
                        let { emoji: n, willClose: i } = e;
                        null != n && n.type === A.B.UNICODE && t(n.surrogates), i && l();
                    },
                    showOnlyUnicode: !0,
                    analyticsOverride: e_,
                });
            },
            [n, r, t],
        );
    return (0, i.jsx)(b.yRy, {
        targetElementRef: s,
        renderPopout: a,
        animation: b.yRy.Animation.NONE,
        position: "bottom",
        align: "right",
        children: (e, t) => {
            let { isShown: n } = t;
            return (0, i.jsx)(
                I.Z,
                eb(ef({}, e), {
                    ref: s,
                    active: n,
                    className: eg.emojiButton,
                    tabIndex: 0,
                    focusProps: {
                        offset: {
                            top: 10,
                            bottom: 10,
                            left: -4,
                            right: 10,
                        },
                    },
                }),
            );
        },
    });
}
class eM extends l.PureComponent {
    componentDidMount() {
        null == this.props.regions && null != this.props.guild && j.Z.fetchRegions(this.props.guild.id);
    }
    componentDidUpdate(e) {
        var t, n, i, l;
        let r = null != (i = null == (t = this.props.channel) ? void 0 : t.topic) ? i : "";
        (null != (l = null == (n = e.channel) ? void 0 : n.topic) ? l : "") !== r &&
            r !== this.state.textTopicValue &&
            this.setState({
                textTopicValue: r,
                richTopicValue: (0, Z.JM)(r),
            });
    }
    getError(e) {
        let { errors: t } = this.props;
        return null == t ? void 0 : t[e];
    }
    getSlowmodeHelpText(e) {
        let { channel: t } = this.props;
        return (null == t ? void 0 : t.isForumLikeChannel())
            ? e
                ? eh.intl.format(eh.t.EIQq9v, eP)
                : eh.intl.string(eh.t["a+1pdH"])
            : (null == t ? void 0 : t.isThread())
              ? e
                  ? eh.intl.format(eh.t["8sTC8v"], eP)
                  : eh.intl.string(eh.t.OMmNCg)
              : e
                ? eh.intl.format(eh.t.wW2MWl, eP)
                : eh.intl.string(eh.t["HEA/DQ"]);
    }
    getCooldownSliderMarker(e) {
        return (0, ei.A)(e, !0);
    }
    getAutoArchiveDurationSliderMarker(e) {
        return (0, ei.A)(e * ee.Z.Seconds.MINUTE, !0);
    }
    renderChannelInfo(e, t) {
        var n, l, r, a, o, h, m;
        let x,
            j,
            {
                canManageChannels: y,
                canSendMessages: C,
                isThreadModerator: N,
                canManageThread: E,
                guild: Z,
                isForumPost: R,
                isOwner: _,
                showAdvancedSlowModeSetting: I,
            } = this.props,
            P = W.Ec.has(e.type),
            A = e.isForumLikeChannel(),
            M = A && (null == (n = e.availableTags) ? void 0 : n.every((e) => e.moderated)),
            V = (null == (l = Y.default.getCurrentUser()) ? void 0 : l.isStaff()) === !0,
            H = W.TK.has(e.type)
                ? (0, i.jsxs)("div", {
                      children: [
                          (0, i.jsx)(p.N, {
                              label: A ? eh.intl.string(eh.t.yR6Hwc) : eh.intl.string(eh.t.X8jMDg),
                              children: (0, i.jsx)(w.ZP, {
                                  className: eg.topicContainer,
                                  innerClassName: s()(eg.topic, { [eg.disabled]: !y }),
                                  characterCountClassName: eg.topicCharacterCount,
                                  maxCharacterCount: A ? eo.Z7 : eo.$x,
                                  onChange: this.handleChangeRichTopic,
                                  placeholder: eh.intl.string(eh.t["71fbmp"]),
                                  channel: eT,
                                  textValue: this.state.textTopicValue,
                                  richValue: this.state.richTopicValue,
                                  type: A ? O.Ie.FORUM_CHANNEL_GUIDELINES : O.Ie.CHANNEL_TOPIC,
                                  onFocus: () => {
                                      this.setState({ topicFocused: !0 });
                                  },
                                  onBlur: () => {
                                      this.setState({ topicFocused: !1 });
                                  },
                                  focused: this.state.topicFocused,
                                  onSubmit: this.handleSubmit,
                                  disableThemedBackground: !0,
                                  error: this.getError("topic"),
                                  disabled: !y,
                                  showValueWhenDisabled: !0,
                              }),
                          }),
                          (0, i.jsx)(b.izJ, { className: s()(ep.marginTop40, ep.marginBottom40) }),
                      ],
                  })
                : null,
            G =
                A && V
                    ? (0, i.jsxs)("div", {
                          children: [
                              (0, i.jsx)(b.Kx8, {
                                  label: eh.intl.string(eh.t.qk2jdX),
                                  placeholder: eh.intl.string(eh.t.DDjD1N),
                                  value: L.ZP.translateSurrogatesToInlineEmoji(null != (a = e.template) ? a : ""),
                                  onChange: this.handleChangeTemplate,
                                  error: this.getError("template"),
                                  maxLength: ed.Vb,
                                  disabled: !y,
                                  autosize: !0,
                                  showCharacterCount: !0,
                              }),
                              (0, i.jsx)(b.izJ, { gap: 40 }),
                          ],
                      })
                    : null,
            F = e.isForumLikeChannel()
                ? (0, i.jsxs)("div", {
                      children: [
                          (0, i.jsx)(p.N, {
                              label: eh.intl.string(eh.t["P/y+sr"]),
                              description: eh.intl.string(eh.t["/oQQ39"]),
                              errorMessage: this.getError("available_tags"),
                              id: ex,
                              children: (0, i.jsx)(D.Z, { channel: e }),
                          }),
                          (0, i.jsx)(f.$q, {
                              disabled: !y || M,
                              value: e.hasFlag(eo.zZ.REQUIRE_TAG),
                              type: f.M0.INVERTED,
                              onChange: (e, t) => this.handleRequireTagChanged(t),
                              children: eh.intl.string(eh.t["9g2Zys"]),
                          }),
                          (0, i.jsx)(b.izJ, { gap: 40 }),
                      ],
                  })
                : null,
            X = e.isForumLikeChannel()
                ? (0, i.jsxs)("div", {
                      children: [
                          (0, i.jsxs)("div", {
                              className: eg.twoColumnSettings,
                              children: [
                                  (0, i.jsxs)("div", {
                                      className: s()(eg.settingsLeft, eg.settingsDefaultReaction),
                                      children: [
                                          (0, i.jsx)(b.vwX, {
                                              id: ev,
                                              className: eg.formTitle,
                                              children: eh.intl.string(eh.t["8ao1+P"]),
                                          }),
                                          (0, i.jsx)(b.R94, {
                                              id: ej,
                                              type: b.R94.Types.DESCRIPTION,
                                              className: eg.description,
                                              children: eh.intl.string(eh.t.SdbF0t),
                                          }),
                                          (0, i.jsxs)(b.hE2, {
                                              align: "center",
                                              children: [
                                                  (0, i.jsx)(b.yRy, {
                                                      targetElementRef: this.defaultReactionButtonRef,
                                                      renderPopout: this.renderEmojiPicker,
                                                      position: "right",
                                                      animation: b.yRy.Animation.NONE,
                                                      align: "center",
                                                      children: (e) =>
                                                          (0, i.jsx)(
                                                              b.zxk,
                                                              eb(ef({}, e), {
                                                                  buttonRef: this.defaultReactionButtonRef,
                                                                  text: eh.intl.string(eh.t["59QgaG"]),
                                                                  disabled: !y,
                                                                  onClick: (t) => {
                                                                      var n;
                                                                      null == (n = e.onClick) || n.call(e, t);
                                                                  },
                                                              }),
                                                          ),
                                                  }),
                                                  null != e.defaultReactionEmoji
                                                      ? (0, i.jsx)(b.Avr, {
                                                            text: eh.intl.string(eh.t.N86XcH),
                                                            onClick: () => this.handleChangeDefaultReactionEmoji(null),
                                                            variant: "critical",
                                                        })
                                                      : null,
                                              ],
                                          }),
                                      ],
                                  }),
                                  (0, i.jsx)(k.Z, { reactionEmoji: e.defaultReactionEmoji }),
                              ],
                          }),
                          (0, i.jsx)(b.izJ, { gap: 40 }),
                      ],
                  })
                : null,
            q = e.isForumChannel()
                ? (0, i.jsxs)("div", {
                      children: [
                          (0, i.jsxs)("div", {
                              className: eg.twoColumnSettings,
                              children: [
                                  (0, i.jsxs)("div", {
                                      className: s()(eg.settingsLeft, eg.settingsDefaultView),
                                      children: [
                                          (0, i.jsx)(b.hjN, {
                                              title: eh.intl.string(eh.t.kQvoCw),
                                              children: (0, i.jsx)(b.q4e, {
                                                  options: [
                                                      {
                                                          label: eh.intl.string(eh.t["4HXEZG"]),
                                                          value: c.X.LIST,
                                                      },
                                                      {
                                                          label: eh.intl.string(eh.t["8RswJC"]),
                                                          value: c.X.GRID,
                                                      },
                                                  ],
                                                  value: null != (o = e.defaultForumLayout) ? o : c.X.LIST,
                                                  onChange: this.handleChangeDefaultForumLayout,
                                              }),
                                          }),
                                          (0, i.jsx)(b.R94, {
                                              className: ep.marginTop8,
                                              type: b.R94.Types.DESCRIPTION,
                                              children: eh.intl.string(eh.t.mOSViY),
                                          }),
                                      ],
                                  }),
                                  e.defaultForumLayout === c.X.GRID
                                      ? (0, i.jsx)(er.Z, { className: eg.defaultImageView })
                                      : (0, i.jsx)(es.Z, { className: eg.defaultImageView }),
                              ],
                          }),
                          (0, i.jsx)(b.izJ, { gap: 40 }),
                      ],
                  })
                : null,
            J = e.isForumLikeChannel()
                ? (0, i.jsxs)("div", {
                      children: [
                          (0, i.jsx)(b.hjN, {
                              title: eh.intl.string(eh.t.gePre3),
                              children: (0, i.jsx)(b.q4e, {
                                  options: [
                                      {
                                          label: eh.intl.string(eh.t.ElZtzs),
                                          value: u.z.LATEST_ACTIVITY,
                                      },
                                      {
                                          label: eh.intl.string(eh.t.w28f3N),
                                          value: u.z.CREATION_DATE,
                                      },
                                  ],
                                  value: e.getDefaultSortOrder(),
                                  onChange: this.handleChangeDefaultSortOrder,
                              }),
                          }),
                          (0, i.jsx)(b.R94, {
                              className: ep.marginTop8,
                              type: b.R94.Types.DESCRIPTION,
                              children: eh.intl.string(eh.t["165cVV"]),
                          }),
                          (0, i.jsx)(b.izJ, { gap: 40 }),
                      ],
                  })
                : null,
            Q = e.isForumLikeChannel()
                ? (0, i.jsxs)("div", {
                      children: [
                          (0, i.jsx)(b.hjN, {
                              title: eh.intl.string(eh.t.Paxaur),
                              children: (0, i.jsx)(b.q4e, {
                                  options: [
                                      {
                                          label: eh.intl.string(eh.t.rQ0ctb),
                                          value: d.z.MATCH_SOME,
                                      },
                                      {
                                          label: eh.intl.string(eh.t.FCXUu7),
                                          value: d.z.MATCH_ALL,
                                      },
                                  ],
                                  value: e.getDefaultTagSetting(),
                                  onChange: this.handleChangeDefaultTagSetting,
                              }),
                          }),
                          (0, i.jsx)(b.R94, {
                              className: ep.marginTop8,
                              type: b.R94.Types.DESCRIPTION,
                              children: eh.intl.string(eh.t.DqOl8P),
                          }),
                          (0, i.jsx)(b.izJ, { gap: 40 }),
                      ],
                  })
                : null,
            K = P ? N : y,
            $ =
                null ==
                (r = T.Z.getCurrentConfig({
                    guildId: e.guild_id,
                    location: "ChannelSettingsOverview",
                }))
                    ? void 0
                    : r.enabled,
            ee = W.X_.has(e.type)
                ? (0, i.jsxs)("div", {
                      children: [
                          (0, i.jsx)(b.hjN, {
                              title: A ? eh.intl.string(eh.t.O1c02t) : void 0,
                              children: (0, i.jsxs)(b.Kqy, {
                                  gap: 20,
                                  children: [
                                      !0 === I
                                          ? (0, i.jsx)(el.Z, {
                                                label: eh.intl.string(eh.t["tTHx9/"]),
                                                helperText: this.getSlowmodeHelpText($),
                                                channel: e,
                                                onChange: this.handleChangeSlowmode,
                                            })
                                          : (0, i.jsx)(b.iRW, {
                                                label: eh.intl.string(eh.t["tTHx9/"]),
                                                helperText: this.getSlowmodeHelpText($),
                                                className: ep.marginTop20,
                                                initialValue: e.rateLimitPerUser,
                                                markers: ea.BiE,
                                                stickToMarkers: !0,
                                                onValueChange: this.handleChangeSlowmode,
                                                onMarkerRender: this.getCooldownSliderMarker,
                                                disabled: !K,
                                                equidistant: !0,
                                                "aria-labelledby": ey,
                                                "aria-describedby": eC,
                                            }),
                                      A
                                          ? (0, i.jsx)(b.iRW, {
                                                label: eh.intl.string(eh.t["fkY5+v"]),
                                                helperText: $
                                                    ? eh.intl.format(eh.t.nZSuEh, eP)
                                                    : eh.intl.string(eh.t.kdZU6O),
                                                initialValue: null != (h = e.defaultThreadRateLimitPerUser) ? h : 0,
                                                markers: ea.BiE,
                                                stickToMarkers: !0,
                                                onValueChange: this.handleChangeThreadMessageSlowmode,
                                                onMarkerRender: this.getCooldownSliderMarker,
                                                disabled: !K,
                                                equidistant: !0,
                                                "aria-labelledby": ey,
                                                "aria-describedby": eC,
                                            })
                                          : null,
                                  ],
                              }),
                          }),
                          (0, i.jsx)(b.izJ, { gap: 40 }),
                      ],
                  })
                : null,
            et =
                P && null != e.threadMetadata
                    ? (0, i.jsxs)("div", {
                          children: [
                              (0, i.jsx)(v.Z, {
                                  page: ea.ZY5.CHANNEL_SETTINGS,
                                  children: (0, i.jsx)(U.Z, {
                                      isDisabled: !E,
                                      autoArchiveDuration:
                                          null != (m = e.threadMetadata.autoArchiveDuration) ? m : eu.AX,
                                      onChange: this.handleAutoArchiveDurationChanged,
                                  }),
                              }),
                              (0, i.jsx)(b.R94, {
                                  className: ep.marginTop8,
                                  type: b.R94.Types.DESCRIPTION,
                                  children: R ? eh.intl.string(eh.t["3aJN9P"]) : eh.intl.string(eh.t.YUXr4e),
                              }),
                          ],
                      })
                    : null,
            ei =
                e.type === ea.d4z.PRIVATE_THREAD && null != e.threadMetadata
                    ? (0, i.jsx)("div", {
                          children: (0, i.jsx)(b.j7V, {
                              note: eh.intl.string(eh.t.cSyXJi),
                              onChange: this.handleInvitableChanged,
                              value: e.threadMetadata.invitable,
                              hideBorder: !0,
                              disabled: !E,
                              children: eh.intl.string(eh.t.s2rpNT),
                          }),
                      })
                    : null,
            ec = null != Z && (0, z.Y2)(Z),
            em = W.ov.has(e.type)
                ? (0, i.jsx)("div", {
                      children: (0, i.jsx)(b.j7V, {
                          note: eh.intl.string(eh.t["9eUgwc"]),
                          onChange: this.handleNSFWChange,
                          value: (0, S.qF)(e),
                          hideBorder: !0,
                          disabled: !y || null != e.linkedLobby || ec,
                          disabledText: null != e.linkedLobby ? eh.intl.string(eh.t.l6uSVV) : null,
                          children: eh.intl.string(eh.t.Es25YW),
                      }),
                  })
                : null,
            eN =
                W.Y0.has(e.type) &&
                null != Z &&
                Z.features.has(ea.oNc.NEWS) &&
                e.id !== (null == Z ? void 0 : Z.rulesChannelId) &&
                e.id !== (null == Z ? void 0 : Z.publicUpdatesChannelId)
                    ? (0, i.jsx)("div", {
                          children: (0, i.jsx)(b.j7V, {
                              note: (0, i.jsxs)(i.Fragment, {
                                  children: [
                                      (0, i.jsx)("div", {
                                          children: eh.intl.format(eh.t.tI7KNT, {
                                              documentationLink: en.Z.getArticleURL(ea.BhN.ANNOUNCEMENT_CHANNELS),
                                          }),
                                      }),
                                      (0, i.jsx)("div", {
                                          className: ep.marginTop8,
                                          children: eh.intl.string(eh.t["2Ab4IS"]),
                                      }),
                                  ],
                              }),
                              onChange: this.handleNewsChange,
                              value: e.type === ea.d4z.GUILD_ANNOUNCEMENT,
                              hideBorder: !0,
                              disabled: !y,
                              children: eh.intl.string(eh.t.Au2b7u),
                          }),
                      })
                    : null,
            eS = W.uC.has(e.type)
                ? (0, i.jsxs)("div", {
                      children: [
                          (0, i.jsx)(b.izJ, { gap: 40 }),
                          (0, i.jsx)(v.Z, {
                              page: ea.ZY5.CHANNEL_SETTINGS,
                              children: (0, i.jsx)(U.Z, {
                                  isDisabled: !y,
                                  autoArchiveDuration: (0, B.WD)(e, null),
                                  onChange: this.handleChangeDefaultAutoArchiveDuration,
                              }),
                          }),
                          (0, i.jsx)(b.R94, {
                              className: ep.marginTop8,
                              type: b.R94.Types.DESCRIPTION,
                              children: e.isForumLikeChannel()
                                  ? eh.intl.string(eh.t.fyXclZ)
                                  : eh.intl.string(eh.t.W3Noi4),
                          }),
                      ],
                  })
                : null,
            eE = this.props.showChannelSummariesSettings
                ? (0, i.jsx)(b.j7V, {
                      note: eh.intl.format(eh.t.feJW19, {
                          helpdeskArticle: en.Z.getArticleURL(ea.BhN.CONVERSATION_SUMMARIES),
                      }),
                      onChange: this.handleChannelSummariesToggled,
                      value:
                          !e.hasFlag(eo.zZ.SUMMARIES_DISABLED) &&
                          (null == Z ? void 0 : Z.features.has(ea.oNc.SUMMARIES_ENABLED_BY_USER)),
                      hideBorder: !0,
                      disabled: !y || !(null == Z ? void 0 : Z.features.has(ea.oNc.SUMMARIES_ENABLED_BY_USER)),
                      children: (0, i.jsxs)("div", {
                          className: eg.badgedItem,
                          children: [
                              eh.intl.string(eh.t.id3ozs),
                              (0, i.jsx)(b.IGR, {
                                  text: eh.intl.string(eh.t.oW0eUV),
                                  color: g.Z.colors.BG_BRAND.css,
                              }),
                          ],
                      }),
                  })
                : null,
            eO = e.isMediaChannel()
                ? (0, i.jsxs)("div", {
                      children: [
                          (0, i.jsx)(b.izJ, { gap: 40 }),
                          (0, i.jsx)(b.j7V, {
                              onChange: this.handleShowMediaOptionsToggled,
                              value: !e.hasFlag(eo.zZ.HIDE_MEDIA_DOWNLOAD_OPTIONS),
                              note: eh.intl.string(eh.t.J4wCc3),
                              hideBorder: !0,
                              disabled: !y,
                              children: eh.intl.string(eh.t.u8LZOj),
                          }),
                      ],
                  })
                : null;
        e.type === ea.d4z.GUILD_CATEGORY
            ? ((j = eh.intl.string(eh.t.OCAkGB)), (x = "category-name"))
            : e.isForumPost()
              ? ((j = eh.intl.string(eh.t.uyVrTE)), (x = "post-title"))
              : P
                ? ((j = eh.intl.string(eh.t.j3XWjI)), (x = "thread-name"))
                : ((j = eh.intl.string(eh.t.PVbHDg)), (x = "channel-name"));
        let eZ = _ ? C : y;
        return (0, i.jsxs)("div", {
            children: [
                (0, i.jsx)(b.oil, {
                    label: j,
                    fullWidth: !0,
                    inputRef: this.nameInputRef,
                    value: t,
                    onChange: this.handleChangeName,
                    onBlur: this.handleBlurName,
                    error: this.getError("name"),
                    name: x,
                    autoFocus: !0,
                    disabled: !eZ,
                    maxLength: ea.HN8,
                    trailing: eZ
                        ? {
                              type: "emoji",
                              button: (0, i.jsx)(eL, {
                                  onEmojiPicked: this.insertEmojiAtPosition,
                                  channel: e,
                                  guildId: null == e ? void 0 : e.guild_id,
                              }),
                          }
                        : void 0,
                }),
                (0, i.jsx)(b.izJ, { gap: 40 }),
                H,
                G,
                F,
                X,
                ee,
                et,
                q,
                J,
                Q,
                ei,
                em,
                eN,
                eE,
                eS,
                eO,
            ],
        });
    }
    renderBitrate(e) {
        return "".concat(Math.round(e / 1000), "kbps");
    }
    renderVoiceBitrate(e, t) {
        let { canManageChannels: n } = this.props;
        if (!this.showVoiceSettings()) return null;
        let l = (0, K.g7)(t, e),
            r = this.getError("bitrate");
        return (0, i.jsxs)(R.Z, {
            direction: R.Z.Direction.VERTICAL,
            className: ep.marginBottom40,
            children: [
                (0, i.jsx)(b.vwX, {
                    id: eN,
                    children: eh.intl.string(eh.t.w2d0vb),
                }),
                "" !== r &&
                    (0, i.jsx)(b.R94, {
                        id: eS,
                        type: b.geA.DESCRIPTION,
                        style: { color: g.Z.unsafe_rawColors.RED_400.css },
                        className: ep.marginBottom8,
                        children: r,
                    }),
                (0, i.jsx)(b.iRW, {
                    initialValue: Math.min(e.bitrate, l),
                    onValueChange: this.handleChangeBitrate,
                    onValueRender: this.renderBitrate,
                    onMarkerRender: this.renderBitrate,
                    markers: [ea.Fc, ea.epw, l],
                    minValue: ea.Fc,
                    maxValue: l,
                    keyboardStep: ea.V7H,
                    disabled: !n,
                    "aria-labelledby": eN,
                    "aria-describedby": null != r && "" !== r ? eS : eE,
                }),
                l > ea.epw
                    ? (0, i.jsx)(b.R94, {
                          id: eE,
                          type: b.geA.DESCRIPTION,
                          children: eh.intl.format(eh.t.SbQJk5, { bitrate: ea.epw / 1000 }),
                      })
                    : null,
            ],
        });
    }
    showVoiceSettings() {
        let { channel: e } = this.props;
        return (
            null != e &&
            null != e.guild_id &&
            W.vg.has(e.type) &&
            (e.isGuildVocal() ||
                V.tM.getCurrentConfig({
                    guildId: e.guild_id,
                    location: "9b50bd_1",
                }).enabled)
        );
    }
    renderVideoQualityMode(e) {
        var t;
        let { canManageChannels: n } = this.props;
        if (!this.showVoiceSettings()) return null;
        let l = [
            {
                value: ea.Ucd.AUTO,
                name: eh.intl.string(eh.t.jjKYpq),
            },
            {
                value: ea.Ucd.FULL,
                name: eh.intl.string(eh.t["7jOoJC"]),
            },
        ];
        return (0, i.jsxs)(R.Z, {
            direction: R.Z.Direction.VERTICAL,
            className: ep.marginBottom40,
            children: [
                (0, i.jsx)(b.FXm, {
                    label: eh.intl.string(eh.t.jhJEJi),
                    onChange: (e) => this.handleVideoQualityModeChange(e),
                    options: l,
                    value: null != (t = e.videoQualityMode) ? t : ea.Ucd.AUTO,
                    disabled: !n,
                }),
                (0, i.jsx)(b.R94, {
                    type: b.geA.DESCRIPTION,
                    children: eh.intl.format(eh.t.c5W7Sk, {}),
                }),
            ],
        });
    }
    onRenderUserLimit(e) {
        return 0 === (e = Math.round(e))
            ? eh.intl.string(eh.t.XX5ciY)
            : eh.intl.formatToPlainString(eh.t["3uHFUV"], { num: e });
    }
    renderUserLimit(e) {
        let { canManageChannels: t } = this.props;
        if (!this.showVoiceSettings()) return null;
        let n = this.getError("user_limit"),
            l = e.isGuildStageVoice() ? ea.xGv : ea.$pe;
        return (0, i.jsxs)(R.Z, {
            direction: R.Z.Direction.VERTICAL,
            className: ep.marginBottom40,
            children: [
                (0, i.jsx)(b.vwX, {
                    id: eO,
                    children: eh.intl.string(eh.t["/AoSGB"]),
                }),
                "" !== n &&
                    (0, i.jsx)(b.R94, {
                        id: eZ,
                        type: b.geA.DESCRIPTION,
                        style: { color: g.Z.unsafe_rawColors.RED_400.css },
                        className: ep.marginBottom8,
                        children: n,
                    }),
                (0, i.jsx)(b.iRW, {
                    initialValue: Math.min(e.userLimit, l),
                    onValueChange: this.handleUserLimitChange,
                    onValueRender: this.onRenderUserLimit,
                    onMarkerRender: (e) => (0 === Math.round(e) ? "\u221E" : e),
                    markers: [0, l],
                    minValue: 0,
                    maxValue: l,
                    disabled: !t,
                    "aria-labelledby": eO,
                    "aria-describedby": null != n && "" !== n ? eZ : ew,
                }),
                (0, i.jsx)(b.R94, {
                    id: ew,
                    type: b.geA.DESCRIPTION,
                    children: eh.intl.format(e.isGuildStageVoice() ? eh.t.OqZI8P : eh.t["8yb3JS"], {}),
                }),
            ],
        });
    }
    renderRegionOverride(e) {
        var t;
        let { regions: n, canManageChannels: l, guild: r } = this.props;
        if (null == r || !this.showVoiceSettings() || e.isGuildStageVoice()) return null;
        let s = [];
        null != n &&
            (s = n
                .filter((e) => !e.deprecated && !e.hidden)
                .map((e) => ({
                    label: e.name,
                    value: e.id,
                }))).unshift({
                label: eh.intl.string(eh.t.JEmsam),
                value: eI,
            });
        let a = null != (t = e.rtcRegion) ? t : eI;
        return (0, i.jsxs)(R.Z, {
            direction: R.Z.Direction.VERTICAL,
            children: [
                (0, i.jsx)(b.vwX, { children: eh.intl.string(eh.t.Ms8bX1) }),
                (0, i.jsx)(b.q4e, {
                    options: s,
                    value: a,
                    onChange: this.handleRegionChange,
                    isDisabled: !l,
                }),
                (0, i.jsx)(b.R94, {
                    type: b.geA.DESCRIPTION,
                    children: eh.intl.string(eh.t["dbTs+/"]),
                }),
            ],
        });
    }
    renderJuiceImage(e) {
        let t,
            { theme: l } = this.props;
        return (
            (t =
                e.type === ea.d4z.GUILD_CATEGORY
                    ? (0, m.wj)(l)
                        ? n(309095)
                        : n(925442)
                    : (0, m.wj)(l)
                      ? n(316491)
                      : n(301358)),
            (0, i.jsx)(R.Z, {
                justify: R.Z.Justify.CENTER,
                className: ep.marginTop60,
                children: (0, i.jsx)("img", {
                    alt: "",
                    width: 280,
                    height: 165,
                    src: t,
                }),
            })
        );
    }
    render() {
        let { channel: e, channelName: t, guild: n } = this.props;
        return null == e || null == t || null == n
            ? null
            : (0, i.jsxs)(b.hjN, {
                  className: "channel-settings-overview",
                  tag: b.RB0.H1,
                  title: eh.intl.string(eh.t["/dp6yc"]),
                  children: [
                      this.renderChannelInfo(e, t),
                      this.showVoiceSettings() ? (0, i.jsx)(b.izJ, { gap: 40 }) : null,
                      this.renderVoiceBitrate(e, n),
                      this.renderVideoQualityMode(e),
                      this.renderUserLimit(e),
                      this.renderRegionOverride(e),
                      this.renderJuiceImage(e),
                  ],
              });
    }
    handleSubmit() {
        return new Promise((e) => {
            e({
                shouldClear: !1,
                shouldRefocus: !0,
            });
        });
    }
    constructor(e) {
        var t, n;
        super(e),
            em(this, "defaultReactionButtonRef", l.createRef()),
            em(this, "nameInputRef", l.createRef()),
            em(this, "cursorPosition", 0),
            em(this, "renderEmojiPicker", (e) => {
                let { closePopout: t } = e,
                    { channel: n } = this.props;
                return (0, i.jsx)(P.Z, {
                    guildId: null == n ? void 0 : n.guild_id,
                    closePopout: t,
                    onSelectEmoji: (e) => {
                        let { emoji: n, willClose: i } = e;
                        this.handleChangeDefaultReactionEmoji(n), i && t();
                    },
                    pickerIntention: ec.Hz.COMMUNITY_CONTENT,
                    channel: n,
                    analyticsOverride: eR,
                });
            }),
            em(this, "handleRequireTagChanged", (e) => {
                let { channel: t } = this.props;
                if (null == t) return null;
                let n = (0, et.mB)(t.flags, eo.zZ.REQUIRE_TAG, e);
                (0, x.pW)({ flags: n });
            }),
            em(this, "handleChangeName", (e) => {
                var t, n;
                let { channel: i } = this.props;
                if (null == i) return;
                i.isThread() ? (e = (0, H.Z)(e, !1)) : ea.TPd.LIMITED_CHANNEL_NAME.has(i.type) && (e = (0, K.Nj)(e));
                let l = null != (n = null == (t = this.nameInputRef.current) ? void 0 : t.selectionStart) ? n : 0;
                (0, x.pW)({ name: e }),
                    setTimeout(() => {
                        var e;
                        null == (e = this.nameInputRef.current) || e.setSelectionRange(l, l);
                    }, 0);
            }),
            em(this, "handleBlurName", () => {
                let { channel: e, channelName: t } = this.props;
                if ((null == e ? void 0 : e.isThread()) && null != t) {
                    let e = (0, H.Z)(t, !0);
                    e !== t && (0, x.pW)({ name: e });
                }
            }),
            em(this, "insertEmojiAtPosition", (e) => {
                var t, n;
                let i = this.nameInputRef.current,
                    l = null != (t = null == i ? void 0 : i.selectionStart) ? t : 0,
                    r = null != (n = null == i ? void 0 : i.selectionEnd) ? n : 0,
                    s = this.props.channelName,
                    a = (null == s ? void 0 : s.substring(0, l)) + e + (null == s ? void 0 : s.substring(r));
                (0, x.pW)({ name: a }),
                    setTimeout(() => {
                        let t = l + e.length;
                        null == i || i.focus(), null == i || i.setSelectionRange(t, t);
                    }, 0);
            }),
            em(this, "handleChangeTopic", (e) => {
                (0, x.pW)({ topic: L.ZP.translateInlineEmojiToSurrogates(e) });
            }),
            em(this, "handleChangeRichTopic", (e, t, n) => {
                this.setState({
                    textTopicValue: t,
                    richTopicValue: n,
                }),
                    this.handleChangeTopic(t);
            }),
            em(this, "handleChangeTemplate", (e) => {
                (0, x.pW)({ template: L.ZP.translateInlineEmojiToSurrogates(e) });
            }),
            em(this, "handleChangeDefaultReactionEmoji", (e) => {
                let t =
                    null == e
                        ? null
                        : (null == e ? void 0 : e.id) != null
                          ? {
                                emojiId: e.id,
                                emojiName: void 0,
                            }
                          : {
                                emojiId: void 0,
                                emojiName: e.optionallyDiverseSequence,
                            };
                (0, x.pW)({ defaultReactionEmoji: t });
            }),
            em(this, "handleChangeDefaultForumLayout", (e) => {
                let { channel: t } = this.props;
                if (null == t) return null;
                (0, x.pW)({ defaultForumLayout: e }), this.props.handleSetDefaultLayout(e);
            }),
            em(this, "handleChangeDefaultSortOrder", (e) => {
                let { channel: t } = this.props;
                if (null == t) return null;
                (0, x.pW)({ defaultSortOrder: e });
            }),
            em(this, "handleChangeDefaultTagSetting", (e) => {
                let { channel: t } = this.props;
                if (null == t) return null;
                (0, x.pW)({ defaultTagSetting: e });
            }),
            em(this, "handleChangeBitrate", (e) => {
                (0, x.pW)({ bitrate: 1000 * Math.round(e / 1000) });
            }),
            em(this, "handleUserLimitChange", (e) => {
                (0, x.pW)({ userLimit: Math.round(e) });
            }),
            em(this, "handleNSFWChange", (e) => {
                (0, x.pW)({ nsfw: e });
            }),
            em(this, "handleActiveChannelsRemovedChange", (e) => {
                let { channel: t } = this.props;
                if (null == t) return null;
                let n = (0, et.mB)(t.flags, eo.zZ.ACTIVE_CHANNELS_REMOVED, !e);
                (0, x.pW)({ flags: n });
            }),
            em(this, "handleNewsChange", (e) => {
                (0, x.pW)({ type: e ? ea.d4z.GUILD_ANNOUNCEMENT : ea.d4z.GUILD_TEXT });
            }),
            em(this, "handleChangeSlowmode", (e) => {
                (0, x.pW)({ rateLimitPerUser: e });
            }),
            em(this, "handleChangeThreadMessageSlowmode", (e) => {
                (0, x.pW)({ defaultThreadRateLimitPerUser: e });
            }),
            em(this, "handleChangeDefaultAutoArchiveDuration", (e) => {
                (0, x.pW)({ defaultAutoArchiveDuration: e });
            }),
            em(this, "handleRegionChange", (e) => {
                (0, x.pW)({ rtcRegion: e === eI ? null : e });
            }),
            em(this, "handleVideoQualityModeChange", (e) => {
                (0, x.pW)({ videoQualityMode: e });
            }),
            em(this, "handleAutoArchiveDurationChanged", (e) => {
                (0, x.pW)({ autoArchiveDuration: e });
            }),
            em(this, "handleInvitableChanged", (e) => {
                (0, x.pW)({ invitable: e });
            }),
            em(this, "handleChannelSummariesToggled", (e) => {
                let { channel: t } = this.props;
                if (null == t) return null;
                let n = (0, et.mB)(t.flags, eo.zZ.SUMMARIES_DISABLED, !e);
                (0, x.pW)({ flags: n });
            }),
            em(this, "handleShowMediaOptionsToggled", (e) => {
                let { channel: t } = this.props;
                if (null == t) return null;
                let n = (0, et.mB)(t.flags, eo.zZ.HIDE_MEDIA_DOWNLOAD_OPTIONS, !e);
                (0, x.pW)({ flags: n });
            });
        let r = null != (n = null == (t = this.props.channel) ? void 0 : t.topic) ? n : "";
        this.state = {
            textTopicValue: r,
            richTopicValue: (0, Z.JM)(r),
            topicFocused: !1,
            updateNameInputCursorPosition: !1,
        };
    }
}
function eD() {
    let { errors: e, channel: t, submitting: n, subsection: r } = (0, h.cj)([X.Z], () => X.Z.getProps()),
        s = (0, h.e7)([Q.Z], () => {
            var e;
            return Q.Z.getRegions(null != (e = null == t ? void 0 : t.getGuildId()) ? e : null);
        }),
        a = (0, h.e7)([G.Z], () => G.Z.theme),
        o = (0, h.e7)([q.Z], () => q.Z.getGuild(null == t ? void 0 : t.getGuildId())),
        c = (0, V.C7)(t),
        d = (0, V.Xb)(t),
        { canManageChannels: u, canSendMessages: g } = (0, h.cj)([J.Z], () => ({
            canManageChannels: J.Z.can(ea.Plq.MANAGE_CHANNELS, t),
            canSendMessages: J.Z.can(ea.Plq.SEND_MESSAGES, t),
        })),
        p = (0, E.ZP)(t),
        m = F.default.getId(),
        f = (0, M.v)(),
        b = null == t ? void 0 : t.id,
        x = (0, N.ts)(t, !1, !0),
        j = C.Z.useExperiment({
            guildId: null == t ? void 0 : t.guild_id,
            location: "ChannelSettingsOverview",
        }).enabled,
        v = l.useCallback(
            (e) => {
                null != b && f.getState().setLayoutType(b, e);
            },
            [b, f],
        );
    return (0, i.jsx)(eM, {
        errors: e,
        channel: t,
        channelName: p,
        submitting: n,
        regions: s,
        theme: a,
        guild: o,
        canManageChannels: (null == t ? void 0 : t.isThread()) ? c : u,
        canSendMessages: g,
        isThreadModerator: d,
        canManageThread: c,
        subsection: r,
        isForumPost: null != t && t.isForumPost(),
        isOwner: null == t ? void 0 : t.isOwner(m),
        handleSetDefaultLayout: v,
        showChannelSummariesSettings: x,
        showAdvancedSlowModeSetting: j,
    });
}
