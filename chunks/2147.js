n.d(t, {
    G: () => eP,
    Z: () => eM,
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
    p = n(780384),
    m = n(755721),
    f = n(481060),
    b = n(787014),
    x = n(771340),
    j = n(410575),
    v = n(852860),
    y = n(129865),
    C = n(902840),
    N = n(622822),
    S = n(933557),
    E = n(541716),
    O = n(752305),
    Z = n(893718),
    w = n(87432),
    T = n(600164),
    R = n(313201),
    _ = n(318766),
    I = n(907040),
    P = n(906411),
    A = n(633302),
    L = n(109434),
    M = n(162389),
    D = n(946458),
    k = n(968437),
    B = n(665906),
    V = n(456077),
    H = n(747212),
    U = n(210887),
    G = n(131704),
    W = n(601964),
    z = n(314897),
    F = n(388610),
    X = n(430824),
    q = n(496675),
    J = n(903223),
    Q = n(594174),
    Y = n(934415),
    K = n(55935),
    $ = n(70956),
    ee = n(630388),
    et = n(63063),
    en = n(129724),
    ei = n(732335),
    el = n(296146),
    er = n(564735),
    es = n(981631),
    ea = n(176505),
    eo = n(185923),
    ec = n(710352),
    ed = n(124368),
    eu = n(388032),
    eh = n(741905),
    eg = n(10198);
function ep(e, t, n) {
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
function em(e) {
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
                ep(e, t, n[t]);
            });
    }
    return e;
}
function ef(e, t) {
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
let eb = (0, R.hQ)(),
    ex = (0, R.hQ)(),
    ej = (0, R.hQ)(),
    ev = (0, R.hQ)(),
    ey = (0, R.hQ)(),
    eC = (0, R.hQ)(),
    eN = (0, R.hQ)(),
    eS = (0, R.hQ)(),
    eE = (0, R.hQ)(),
    eO = (0, R.hQ)(),
    eZ = (0, R.hQ)(),
    ew = (0, G.kt)({
        id: "1",
        type: es.d4z.DM,
    }),
    eT = {
        popoutLocation: {
            page: es.ZY5.CHANNEL_SETTINGS,
            section: es.jXE.CHANNEL_DEFAULT_REACTION,
            object: es.qAy.EMOJI_PICKER_BUTTON,
        },
    },
    eR = {
        popoutLocation: {
            page: es.ZY5.CHANNEL_SETTINGS,
            section: es.jXE.CHANNEL_NAME,
            object: es.qAy.EMOJI_PICKER_BUTTON,
        },
    },
    e_ = "AUTOMATIC_RTC_REGION",
    eI = {
        breakingChangeDate: (0, K.vc)(o()(es.zQD), "LL"),
        helpCenterLink: et.Z.getArticleURL(es.BhN.SLOWMODE),
    },
    eP = h.ZP.connectStores([F.Z], () => {
        let { channel: e, submitting: t } = F.Z.getProps();
        return {
            channel: e,
            submitting: t,
            onReset() {
                null != e && (0, b.S1)(e.id);
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
                    defaultSortOrder: x,
                    defaultForumLayout: j,
                    defaultTagSetting: v,
                } = e;
                e.isThread() && (t = (0, V.Z)(t, !0)),
                    (0, b.wk)(e.id, {
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
                        defaultSortOrder: x,
                        defaultForumLayout: j,
                        defaultTagSetting: v,
                    });
            },
        };
    })(v.Z);
function eA(e) {
    let { onEmojiPicked: t, channel: n, guildId: r } = e,
        s = l.useRef(null),
        a = l.useCallback(
            (e) => {
                let { closePopout: l } = e;
                return (0, i.jsx)(I.Z, {
                    channel: n,
                    guildId: r,
                    pickerIntention: eo.Hz.CHANNEL_NAME,
                    closePopout: l,
                    onNavigateAway: l,
                    onSelectEmoji: (e) => {
                        let { emoji: n, willClose: i } = e;
                        null != n && n.type === P.B.UNICODE && t(n.surrogates), i && l();
                    },
                    showOnlyUnicode: !0,
                    analyticsOverride: eR,
                });
            },
            [n, r, t],
        );
    return (0, i.jsx)(f.yRy, {
        targetElementRef: s,
        renderPopout: a,
        animation: f.yRy.Animation.NONE,
        position: "bottom",
        align: "right",
        children: (e, t) => {
            let { isShown: n } = t;
            return (0, i.jsx)(
                _.Z,
                ef(em({}, e), {
                    ref: s,
                    active: n,
                    className: eh.emojiButton,
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
class eL extends l.PureComponent {
    componentDidMount() {
        null == this.props.regions && null != this.props.guild && x.Z.fetchRegions(this.props.guild.id);
    }
    componentDidUpdate(e) {
        var t, n, i, l;
        let r = null != (i = null == (t = this.props.channel) ? void 0 : t.topic) ? i : "";
        (null != (l = null == (n = e.channel) ? void 0 : n.topic) ? l : "") !== r &&
            r !== this.state.textTopicValue &&
            this.setState({
                textTopicValue: r,
                richTopicValue: (0, O.JM)(r),
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
                ? eu.intl.format(eu.t.EIQq9v, eI)
                : eu.intl.string(eu.t["a+1pdH"])
            : (null == t ? void 0 : t.isThread())
              ? e
                  ? eu.intl.format(eu.t["8sTC8v"], eI)
                  : eu.intl.string(eu.t.OMmNCg)
              : e
                ? eu.intl.format(eu.t.wW2MWl, eI)
                : eu.intl.string(eu.t["HEA/DQ"]);
    }
    getCooldownSliderMarker(e) {
        return (0, en.A)(e, !0);
    }
    getAutoArchiveDurationSliderMarker(e) {
        return (0, en.A)(e * $.Z.Seconds.MINUTE, !0);
    }
    renderChannelInfo(e, t) {
        var n, l, r, a, o, h, p;
        let b,
            x,
            {
                canManageChannels: v,
                canSendMessages: y,
                isThreadModerator: C,
                canManageThread: S,
                guild: O,
                isForumPost: T,
                isOwner: R,
                showAdvancedSlowModeSetting: _,
            } = this.props,
            I = G.Ec.has(e.type),
            P = e.isForumLikeChannel(),
            L = P && (null == (n = e.availableTags) ? void 0 : n.every((e) => e.moderated)),
            B = (null == (l = Q.default.getCurrentUser()) ? void 0 : l.isStaff()) === !0,
            V = G.TK.has(e.type)
                ? (0, i.jsxs)("div", {
                      children: [
                          (0, i.jsx)(f.NIc, {
                              label: P ? eu.intl.string(eu.t.yR6Hwc) : eu.intl.string(eu.t.X8jMDg),
                              children: (0, i.jsx)(Z.ZP, {
                                  className: s()(eh.topicContainer, { [eh.disabled]: !v }),
                                  innerClassName: s()(eh.topic, { [eh.disabled]: !v }),
                                  characterCountClassName: eh.topicCharacterCount,
                                  maxCharacterCount: P ? ea.Z7 : ea.$x,
                                  onChange: this.handleChangeRichTopic,
                                  placeholder: eu.intl.string(eu.t["71fbmp"]),
                                  channel: ew,
                                  textValue: this.state.textTopicValue,
                                  richValue: this.state.richTopicValue,
                                  type: P ? E.Ie.FORUM_CHANNEL_GUIDELINES : E.Ie.CHANNEL_TOPIC,
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
                                  disabled: !v,
                                  showValueWhenDisabled: !0,
                              }),
                          }),
                          (0, i.jsx)(f.izJ, { className: s()(eg.marginTop40, eg.marginBottom40) }),
                      ],
                  })
                : null,
            U =
                P && B
                    ? (0, i.jsxs)("div", {
                          children: [
                              (0, i.jsx)(f.Kx8, {
                                  label: eu.intl.string(eu.t.qk2jdX),
                                  placeholder: eu.intl.string(eu.t.DDjD1N),
                                  value: A.ZP.translateSurrogatesToInlineEmoji(null != (a = e.template) ? a : ""),
                                  onChange: this.handleChangeTemplate,
                                  error: this.getError("template"),
                                  maxLength: ec.Vb,
                                  disabled: !v,
                                  autosize: !0,
                                  showCharacterCount: !0,
                              }),
                              (0, i.jsx)(f.izJ, { gap: 40 }),
                          ],
                      })
                    : null,
            z = e.isForumLikeChannel()
                ? (0, i.jsxs)("div", {
                      children: [
                          (0, i.jsx)(f.NIc, {
                              label: eu.intl.string(eu.t["P/y+sr"]),
                              description: eu.intl.string(eu.t["/oQQ39"]),
                              errorMessage: this.getError("available_tags"),
                              id: eb,
                              children: (0, i.jsx)(M.Z, { channel: e }),
                          }),
                          (0, i.jsx)(m.$q, {
                              disabled: !v || L,
                              value: e.hasFlag(ea.zZ.REQUIRE_TAG),
                              type: m.M0.INVERTED,
                              onChange: (e, t) => this.handleRequireTagChanged(t),
                              children: eu.intl.string(eu.t["9g2Zys"]),
                          }),
                          (0, i.jsx)(f.izJ, { gap: 40 }),
                      ],
                  })
                : null,
            F = e.isForumLikeChannel()
                ? (0, i.jsxs)("div", {
                      children: [
                          (0, i.jsxs)("div", {
                              className: eh.twoColumnSettings,
                              children: [
                                  (0, i.jsxs)("div", {
                                      className: s()(eh.settingsLeft, eh.settingsDefaultReaction),
                                      children: [
                                          (0, i.jsx)(f.vwX, {
                                              id: ej,
                                              className: eh.formTitle,
                                              children: eu.intl.string(eu.t["8ao1+P"]),
                                          }),
                                          (0, i.jsx)(f.R94, {
                                              id: ex,
                                              type: f.R94.Types.DESCRIPTION,
                                              className: eh.description,
                                              children: eu.intl.string(eu.t.SdbF0t),
                                          }),
                                          (0, i.jsxs)(f.hE2, {
                                              align: "center",
                                              children: [
                                                  (0, i.jsx)(f.yRy, {
                                                      targetElementRef: this.defaultReactionButtonRef,
                                                      renderPopout: this.renderEmojiPicker,
                                                      position: "right",
                                                      animation: f.yRy.Animation.NONE,
                                                      align: "center",
                                                      children: (e) =>
                                                          (0, i.jsx)(
                                                              f.zxk,
                                                              ef(em({}, e), {
                                                                  buttonRef: this.defaultReactionButtonRef,
                                                                  text: eu.intl.string(eu.t["59QgaG"]),
                                                                  disabled: !v,
                                                                  onClick: (t) => {
                                                                      var n;
                                                                      null == (n = e.onClick) || n.call(e, t);
                                                                  },
                                                              }),
                                                          ),
                                                  }),
                                                  null != e.defaultReactionEmoji
                                                      ? (0, i.jsx)(f.Avr, {
                                                            text: eu.intl.string(eu.t.N86XcH),
                                                            onClick: () => this.handleChangeDefaultReactionEmoji(null),
                                                            variant: "critical",
                                                        })
                                                      : null,
                                              ],
                                          }),
                                      ],
                                  }),
                                  (0, i.jsx)(D.Z, { reactionEmoji: e.defaultReactionEmoji }),
                              ],
                          }),
                          (0, i.jsx)(f.izJ, { gap: 40 }),
                      ],
                  })
                : null,
            X = e.isForumChannel()
                ? (0, i.jsxs)("div", {
                      children: [
                          (0, i.jsxs)("div", {
                              className: eh.twoColumnSettings,
                              children: [
                                  (0, i.jsxs)("div", {
                                      className: s()(eh.settingsLeft, eh.settingsDefaultView),
                                      children: [
                                          (0, i.jsx)(f.hjN, {
                                              title: eu.intl.string(eu.t.kQvoCw),
                                              children: (0, i.jsx)(f.q4e, {
                                                  options: [
                                                      {
                                                          label: eu.intl.string(eu.t["4HXEZG"]),
                                                          value: c.X.LIST,
                                                      },
                                                      {
                                                          label: eu.intl.string(eu.t["8RswJC"]),
                                                          value: c.X.GRID,
                                                      },
                                                  ],
                                                  value: null != (o = e.defaultForumLayout) ? o : c.X.LIST,
                                                  onChange: this.handleChangeDefaultForumLayout,
                                              }),
                                          }),
                                          (0, i.jsx)(f.R94, {
                                              className: eg.marginTop8,
                                              type: f.R94.Types.DESCRIPTION,
                                              children: eu.intl.string(eu.t.mOSViY),
                                          }),
                                      ],
                                  }),
                                  e.defaultForumLayout === c.X.GRID
                                      ? (0, i.jsx)(el.Z, { className: eh.defaultImageView })
                                      : (0, i.jsx)(er.Z, { className: eh.defaultImageView }),
                              ],
                          }),
                          (0, i.jsx)(f.izJ, { gap: 40 }),
                      ],
                  })
                : null,
            q = e.isForumLikeChannel()
                ? (0, i.jsxs)("div", {
                      children: [
                          (0, i.jsx)(f.hjN, {
                              title: eu.intl.string(eu.t.gePre3),
                              children: (0, i.jsx)(f.q4e, {
                                  options: [
                                      {
                                          label: eu.intl.string(eu.t.ElZtzs),
                                          value: u.z.LATEST_ACTIVITY,
                                      },
                                      {
                                          label: eu.intl.string(eu.t.w28f3N),
                                          value: u.z.CREATION_DATE,
                                      },
                                  ],
                                  value: e.getDefaultSortOrder(),
                                  onChange: this.handleChangeDefaultSortOrder,
                              }),
                          }),
                          (0, i.jsx)(f.R94, {
                              className: eg.marginTop8,
                              type: f.R94.Types.DESCRIPTION,
                              children: eu.intl.string(eu.t["165cVV"]),
                          }),
                          (0, i.jsx)(f.izJ, { gap: 40 }),
                      ],
                  })
                : null,
            J = e.isForumLikeChannel()
                ? (0, i.jsxs)("div", {
                      children: [
                          (0, i.jsx)(f.hjN, {
                              title: eu.intl.string(eu.t.Paxaur),
                              children: (0, i.jsx)(f.q4e, {
                                  options: [
                                      {
                                          label: eu.intl.string(eu.t.rQ0ctb),
                                          value: d.z.MATCH_SOME,
                                      },
                                      {
                                          label: eu.intl.string(eu.t.FCXUu7),
                                          value: d.z.MATCH_ALL,
                                      },
                                  ],
                                  value: e.getDefaultTagSetting(),
                                  onChange: this.handleChangeDefaultTagSetting,
                              }),
                          }),
                          (0, i.jsx)(f.R94, {
                              className: eg.marginTop8,
                              type: f.R94.Types.DESCRIPTION,
                              children: eu.intl.string(eu.t.DqOl8P),
                          }),
                          (0, i.jsx)(f.izJ, { gap: 40 }),
                      ],
                  })
                : null,
            Y = I ? C : v,
            K =
                null ==
                (r = w.Z.getCurrentConfig({
                    guildId: e.guild_id,
                    location: "ChannelSettingsOverview",
                }))
                    ? void 0
                    : r.enabled,
            $ = G.X_.has(e.type)
                ? (0, i.jsxs)("div", {
                      children: [
                          (0, i.jsx)(f.hjN, {
                              title: P ? eu.intl.string(eu.t.O1c02t) : void 0,
                              children: (0, i.jsxs)(f.Kqy, {
                                  gap: 20,
                                  children: [
                                      !0 === _
                                          ? (0, i.jsx)(ei.Z, {
                                                label: eu.intl.string(eu.t["tTHx9/"]),
                                                helperText: this.getSlowmodeHelpText(K),
                                                channel: e,
                                                onChange: this.handleChangeSlowmode,
                                            })
                                          : (0, i.jsx)(f.iRW, {
                                                label: eu.intl.string(eu.t["tTHx9/"]),
                                                helperText: this.getSlowmodeHelpText(K),
                                                className: eg.marginTop20,
                                                initialValue: e.rateLimitPerUser,
                                                markers: es.BiE,
                                                stickToMarkers: !0,
                                                onValueChange: this.handleChangeSlowmode,
                                                onMarkerRender: this.getCooldownSliderMarker,
                                                disabled: !Y,
                                                equidistant: !0,
                                                "aria-labelledby": ev,
                                                "aria-describedby": ey,
                                            }),
                                      P
                                          ? (0, i.jsx)(f.iRW, {
                                                label: eu.intl.string(eu.t["fkY5+v"]),
                                                helperText: K
                                                    ? eu.intl.format(eu.t.nZSuEh, eI)
                                                    : eu.intl.string(eu.t.kdZU6O),
                                                initialValue: null != (h = e.defaultThreadRateLimitPerUser) ? h : 0,
                                                markers: es.BiE,
                                                stickToMarkers: !0,
                                                onValueChange: this.handleChangeThreadMessageSlowmode,
                                                onMarkerRender: this.getCooldownSliderMarker,
                                                disabled: !Y,
                                                equidistant: !0,
                                                "aria-labelledby": ev,
                                                "aria-describedby": ey,
                                            })
                                          : null,
                                  ],
                              }),
                          }),
                          (0, i.jsx)(f.izJ, { gap: 40 }),
                      ],
                  })
                : null,
            ee =
                I && null != e.threadMetadata
                    ? (0, i.jsxs)("div", {
                          children: [
                              (0, i.jsx)(j.Z, {
                                  page: es.ZY5.CHANNEL_SETTINGS,
                                  children: (0, i.jsx)(H.Z, {
                                      isDisabled: !S,
                                      autoArchiveDuration:
                                          null != (p = e.threadMetadata.autoArchiveDuration) ? p : ed.AX,
                                      onChange: this.handleAutoArchiveDurationChanged,
                                  }),
                              }),
                              (0, i.jsx)(f.R94, {
                                  className: eg.marginTop8,
                                  type: f.R94.Types.DESCRIPTION,
                                  children: T ? eu.intl.string(eu.t["3aJN9P"]) : eu.intl.string(eu.t.YUXr4e),
                              }),
                          ],
                      })
                    : null,
            en =
                e.type === es.d4z.PRIVATE_THREAD && null != e.threadMetadata
                    ? (0, i.jsx)("div", {
                          children: (0, i.jsx)(f.j7V, {
                              note: eu.intl.string(eu.t.cSyXJi),
                              onChange: this.handleInvitableChanged,
                              value: e.threadMetadata.invitable,
                              hideBorder: !0,
                              disabled: !S,
                              children: eu.intl.string(eu.t.s2rpNT),
                          }),
                      })
                    : null,
            eo = null != O && (0, W.Y2)(O),
            ep = G.ov.has(e.type)
                ? (0, i.jsx)("div", {
                      children: (0, i.jsx)(f.j7V, {
                          note: eu.intl.string(eu.t["9eUgwc"]),
                          onChange: this.handleNSFWChange,
                          value: (0, N.qF)(e),
                          hideBorder: !0,
                          disabled: !v || null != e.linkedLobby || eo,
                          disabledText: null != e.linkedLobby ? eu.intl.string(eu.t.l6uSVV) : null,
                          children: eu.intl.string(eu.t.Es25YW),
                      }),
                  })
                : null,
            eC =
                G.Y0.has(e.type) &&
                null != O &&
                O.features.has(es.oNc.NEWS) &&
                e.id !== (null == O ? void 0 : O.rulesChannelId) &&
                e.id !== (null == O ? void 0 : O.publicUpdatesChannelId)
                    ? (0, i.jsx)("div", {
                          children: (0, i.jsx)(f.j7V, {
                              note: (0, i.jsxs)(i.Fragment, {
                                  children: [
                                      (0, i.jsx)("div", {
                                          children: eu.intl.format(eu.t.tI7KNT, {
                                              documentationLink: et.Z.getArticleURL(es.BhN.ANNOUNCEMENT_CHANNELS),
                                          }),
                                      }),
                                      (0, i.jsx)("div", {
                                          className: eg.marginTop8,
                                          children: eu.intl.string(eu.t["2Ab4IS"]),
                                      }),
                                  ],
                              }),
                              onChange: this.handleNewsChange,
                              value: e.type === es.d4z.GUILD_ANNOUNCEMENT,
                              hideBorder: !0,
                              disabled: !v,
                              children: eu.intl.string(eu.t.Au2b7u),
                          }),
                      })
                    : null,
            eN = G.uC.has(e.type)
                ? (0, i.jsxs)("div", {
                      children: [
                          (0, i.jsx)(f.izJ, { gap: 40 }),
                          (0, i.jsx)(j.Z, {
                              page: es.ZY5.CHANNEL_SETTINGS,
                              children: (0, i.jsx)(H.Z, {
                                  isDisabled: !v,
                                  autoArchiveDuration: (0, k.WD)(e, null),
                                  onChange: this.handleChangeDefaultAutoArchiveDuration,
                              }),
                          }),
                          (0, i.jsx)(f.R94, {
                              className: eg.marginTop8,
                              type: f.R94.Types.DESCRIPTION,
                              children: e.isForumLikeChannel()
                                  ? eu.intl.string(eu.t.fyXclZ)
                                  : eu.intl.string(eu.t.W3Noi4),
                          }),
                      ],
                  })
                : null,
            eS = this.props.showChannelSummariesSettings
                ? (0, i.jsx)(f.j7V, {
                      note: eu.intl.format(eu.t.feJW19, {
                          helpdeskArticle: et.Z.getArticleURL(es.BhN.CONVERSATION_SUMMARIES),
                      }),
                      onChange: this.handleChannelSummariesToggled,
                      value:
                          !e.hasFlag(ea.zZ.SUMMARIES_DISABLED) &&
                          (null == O ? void 0 : O.features.has(es.oNc.SUMMARIES_ENABLED_BY_USER)),
                      hideBorder: !0,
                      disabled: !v || !(null == O ? void 0 : O.features.has(es.oNc.SUMMARIES_ENABLED_BY_USER)),
                      children: (0, i.jsxs)("div", {
                          className: eh.badgedItem,
                          children: [
                              eu.intl.string(eu.t.id3ozs),
                              (0, i.jsx)(f.IGR, {
                                  text: eu.intl.string(eu.t.oW0eUV),
                                  color: g.Z.colors.BG_BRAND.css,
                              }),
                          ],
                      }),
                  })
                : null,
            eE = e.isMediaChannel()
                ? (0, i.jsxs)("div", {
                      children: [
                          (0, i.jsx)(f.izJ, { gap: 40 }),
                          (0, i.jsx)(f.j7V, {
                              onChange: this.handleShowMediaOptionsToggled,
                              value: !e.hasFlag(ea.zZ.HIDE_MEDIA_DOWNLOAD_OPTIONS),
                              note: eu.intl.string(eu.t.J4wCc3),
                              hideBorder: !0,
                              disabled: !v,
                              children: eu.intl.string(eu.t.u8LZOj),
                          }),
                      ],
                  })
                : null;
        e.type === es.d4z.GUILD_CATEGORY
            ? ((x = eu.intl.string(eu.t.OCAkGB)), (b = "category-name"))
            : e.isForumPost()
              ? ((x = eu.intl.string(eu.t.uyVrTE)), (b = "post-title"))
              : I
                ? ((x = eu.intl.string(eu.t.j3XWjI)), (b = "thread-name"))
                : ((x = eu.intl.string(eu.t.PVbHDg)), (b = "channel-name"));
        let eO = R ? y : v;
        return (0, i.jsxs)("div", {
            children: [
                (0, i.jsx)(f.oil, {
                    label: x,
                    fullWidth: !0,
                    inputRef: this.nameInputRef,
                    value: t,
                    onChange: this.handleChangeName,
                    onBlur: this.handleBlurName,
                    error: this.getError("name"),
                    name: b,
                    autoFocus: !0,
                    disabled: !eO,
                    maxLength: es.HN8,
                    trailing: eO
                        ? {
                              type: "emoji",
                              button: (0, i.jsx)(eA, {
                                  onEmojiPicked: this.insertEmojiAtPosition,
                                  channel: e,
                                  guildId: null == e ? void 0 : e.guild_id,
                              }),
                          }
                        : void 0,
                }),
                (0, i.jsx)(f.izJ, { gap: 40 }),
                V,
                U,
                z,
                F,
                $,
                ee,
                X,
                q,
                J,
                en,
                ep,
                eC,
                eS,
                eN,
                eE,
            ],
        });
    }
    renderBitrate(e) {
        return "".concat(Math.round(e / 1000), "kbps");
    }
    renderVoiceBitrate(e, t) {
        let { canManageChannels: n } = this.props;
        if (!this.showVoiceSettings()) return null;
        let l = (0, Y.g7)(t, e),
            r = this.getError("bitrate");
        return (0, i.jsxs)(T.Z, {
            direction: T.Z.Direction.VERTICAL,
            className: eg.marginBottom40,
            children: [
                (0, i.jsx)(f.vwX, {
                    id: eC,
                    children: eu.intl.string(eu.t.w2d0vb),
                }),
                "" !== r &&
                    (0, i.jsx)(f.R94, {
                        id: eN,
                        type: f.geA.DESCRIPTION,
                        style: { color: g.Z.unsafe_rawColors.RED_400.css },
                        className: eg.marginBottom8,
                        children: r,
                    }),
                (0, i.jsx)(f.iRW, {
                    initialValue: Math.min(e.bitrate, l),
                    onValueChange: this.handleChangeBitrate,
                    onValueRender: this.renderBitrate,
                    onMarkerRender: this.renderBitrate,
                    markers: [es.Fc, es.epw, l],
                    minValue: es.Fc,
                    maxValue: l,
                    keyboardStep: es.V7H,
                    disabled: !n,
                    "aria-labelledby": eC,
                    "aria-describedby": null != r && "" !== r ? eN : eS,
                }),
                l > es.epw
                    ? (0, i.jsx)(f.R94, {
                          id: eS,
                          type: f.geA.DESCRIPTION,
                          children: eu.intl.format(eu.t.SbQJk5, { bitrate: es.epw / 1000 }),
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
            G.vg.has(e.type) &&
            (e.isGuildVocal() ||
                B.tM.getCurrentConfig({
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
                value: es.Ucd.AUTO,
                name: eu.intl.string(eu.t.jjKYpq),
            },
            {
                value: es.Ucd.FULL,
                name: eu.intl.string(eu.t["7jOoJC"]),
            },
        ];
        return (0, i.jsxs)(T.Z, {
            direction: T.Z.Direction.VERTICAL,
            className: eg.marginBottom40,
            children: [
                (0, i.jsx)(f.FXm, {
                    label: eu.intl.string(eu.t.jhJEJi),
                    onChange: (e) => this.handleVideoQualityModeChange(e),
                    options: l,
                    value: null != (t = e.videoQualityMode) ? t : es.Ucd.AUTO,
                    disabled: !n,
                }),
                (0, i.jsx)(f.R94, {
                    type: f.geA.DESCRIPTION,
                    children: eu.intl.format(eu.t.c5W7Sk, {}),
                }),
            ],
        });
    }
    onRenderUserLimit(e) {
        return 0 === (e = Math.round(e))
            ? eu.intl.string(eu.t.XX5ciY)
            : eu.intl.formatToPlainString(eu.t["3uHFUV"], { num: e });
    }
    renderUserLimit(e) {
        let { canManageChannels: t } = this.props;
        if (!this.showVoiceSettings()) return null;
        let n = this.getError("user_limit"),
            l = e.isGuildStageVoice() ? es.xGv : es.$pe;
        return (0, i.jsxs)(T.Z, {
            direction: T.Z.Direction.VERTICAL,
            className: eg.marginBottom40,
            children: [
                (0, i.jsx)(f.vwX, {
                    id: eE,
                    children: eu.intl.string(eu.t["/AoSGB"]),
                }),
                "" !== n &&
                    (0, i.jsx)(f.R94, {
                        id: eO,
                        type: f.geA.DESCRIPTION,
                        style: { color: g.Z.unsafe_rawColors.RED_400.css },
                        className: eg.marginBottom8,
                        children: n,
                    }),
                (0, i.jsx)(f.iRW, {
                    initialValue: Math.min(e.userLimit, l),
                    onValueChange: this.handleUserLimitChange,
                    onValueRender: this.onRenderUserLimit,
                    onMarkerRender: (e) => (0 === Math.round(e) ? "\u221E" : e),
                    markers: [0, l],
                    minValue: 0,
                    maxValue: l,
                    disabled: !t,
                    "aria-labelledby": eE,
                    "aria-describedby": null != n && "" !== n ? eO : eZ,
                }),
                (0, i.jsx)(f.R94, {
                    id: eZ,
                    type: f.geA.DESCRIPTION,
                    children: eu.intl.format(e.isGuildStageVoice() ? eu.t.OqZI8P : eu.t["8yb3JS"], {}),
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
                label: eu.intl.string(eu.t.JEmsam),
                value: e_,
            });
        let a = null != (t = e.rtcRegion) ? t : e_;
        return (0, i.jsxs)(T.Z, {
            direction: T.Z.Direction.VERTICAL,
            children: [
                (0, i.jsx)(f.vwX, { children: eu.intl.string(eu.t.Ms8bX1) }),
                (0, i.jsx)(f.q4e, {
                    options: s,
                    value: a,
                    onChange: this.handleRegionChange,
                    isDisabled: !l,
                }),
                (0, i.jsx)(f.R94, {
                    type: f.geA.DESCRIPTION,
                    children: eu.intl.string(eu.t["dbTs+/"]),
                }),
            ],
        });
    }
    renderJuiceImage(e) {
        let t,
            { theme: l } = this.props;
        return (
            (t =
                e.type === es.d4z.GUILD_CATEGORY
                    ? (0, p.wj)(l)
                        ? n(309095)
                        : n(925442)
                    : (0, p.wj)(l)
                      ? n(316491)
                      : n(301358)),
            (0, i.jsx)(T.Z, {
                justify: T.Z.Justify.CENTER,
                className: eg.marginTop60,
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
            : (0, i.jsxs)(f.hjN, {
                  className: "channel-settings-overview",
                  tag: f.RB0.H1,
                  title: eu.intl.string(eu.t["/dp6yc"]),
                  children: [
                      this.renderChannelInfo(e, t),
                      this.showVoiceSettings() ? (0, i.jsx)(f.izJ, { gap: 40 }) : null,
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
            ep(this, "defaultReactionButtonRef", l.createRef()),
            ep(this, "nameInputRef", l.createRef()),
            ep(this, "cursorPosition", 0),
            ep(this, "renderEmojiPicker", (e) => {
                let { closePopout: t } = e,
                    { channel: n } = this.props;
                return (0, i.jsx)(I.Z, {
                    guildId: null == n ? void 0 : n.guild_id,
                    closePopout: t,
                    onSelectEmoji: (e) => {
                        let { emoji: n, willClose: i } = e;
                        this.handleChangeDefaultReactionEmoji(n), i && t();
                    },
                    pickerIntention: eo.Hz.COMMUNITY_CONTENT,
                    channel: n,
                    analyticsOverride: eT,
                });
            }),
            ep(this, "handleRequireTagChanged", (e) => {
                let { channel: t } = this.props;
                if (null == t) return null;
                let n = (0, ee.mB)(t.flags, ea.zZ.REQUIRE_TAG, e);
                (0, b.pW)({ flags: n });
            }),
            ep(this, "handleChangeName", (e) => {
                var t, n;
                let { channel: i } = this.props;
                if (null == i) return;
                i.isThread() ? (e = (0, V.Z)(e, !1)) : es.TPd.LIMITED_CHANNEL_NAME.has(i.type) && (e = (0, Y.Nj)(e));
                let l = null != (n = null == (t = this.nameInputRef.current) ? void 0 : t.selectionStart) ? n : 0;
                (0, b.pW)({ name: e }),
                    setTimeout(() => {
                        var e;
                        null == (e = this.nameInputRef.current) || e.setSelectionRange(l, l);
                    }, 0);
            }),
            ep(this, "handleBlurName", () => {
                let { channel: e, channelName: t } = this.props;
                if ((null == e ? void 0 : e.isThread()) && null != t) {
                    let e = (0, V.Z)(t, !0);
                    e !== t && (0, b.pW)({ name: e });
                }
            }),
            ep(this, "insertEmojiAtPosition", (e) => {
                var t, n;
                let i = this.nameInputRef.current,
                    l = null != (t = null == i ? void 0 : i.selectionStart) ? t : 0,
                    r = null != (n = null == i ? void 0 : i.selectionEnd) ? n : 0,
                    s = this.props.channelName,
                    a = (null == s ? void 0 : s.substring(0, l)) + e + (null == s ? void 0 : s.substring(r));
                (0, b.pW)({ name: a }),
                    setTimeout(() => {
                        let t = l + e.length;
                        null == i || i.focus(), null == i || i.setSelectionRange(t, t);
                    }, 0);
            }),
            ep(this, "handleChangeTopic", (e) => {
                (0, b.pW)({ topic: A.ZP.translateInlineEmojiToSurrogates(e) });
            }),
            ep(this, "handleChangeRichTopic", (e, t, n) => {
                this.setState({
                    textTopicValue: t,
                    richTopicValue: n,
                }),
                    this.handleChangeTopic(t);
            }),
            ep(this, "handleChangeTemplate", (e) => {
                (0, b.pW)({ template: A.ZP.translateInlineEmojiToSurrogates(e) });
            }),
            ep(this, "handleChangeDefaultReactionEmoji", (e) => {
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
                (0, b.pW)({ defaultReactionEmoji: t });
            }),
            ep(this, "handleChangeDefaultForumLayout", (e) => {
                let { channel: t } = this.props;
                if (null == t) return null;
                (0, b.pW)({ defaultForumLayout: e }), this.props.handleSetDefaultLayout(e);
            }),
            ep(this, "handleChangeDefaultSortOrder", (e) => {
                let { channel: t } = this.props;
                if (null == t) return null;
                (0, b.pW)({ defaultSortOrder: e });
            }),
            ep(this, "handleChangeDefaultTagSetting", (e) => {
                let { channel: t } = this.props;
                if (null == t) return null;
                (0, b.pW)({ defaultTagSetting: e });
            }),
            ep(this, "handleChangeBitrate", (e) => {
                (0, b.pW)({ bitrate: 1000 * Math.round(e / 1000) });
            }),
            ep(this, "handleUserLimitChange", (e) => {
                (0, b.pW)({ userLimit: Math.round(e) });
            }),
            ep(this, "handleNSFWChange", (e) => {
                (0, b.pW)({ nsfw: e });
            }),
            ep(this, "handleActiveChannelsRemovedChange", (e) => {
                let { channel: t } = this.props;
                if (null == t) return null;
                let n = (0, ee.mB)(t.flags, ea.zZ.ACTIVE_CHANNELS_REMOVED, !e);
                (0, b.pW)({ flags: n });
            }),
            ep(this, "handleNewsChange", (e) => {
                (0, b.pW)({ type: e ? es.d4z.GUILD_ANNOUNCEMENT : es.d4z.GUILD_TEXT });
            }),
            ep(this, "handleChangeSlowmode", (e) => {
                (0, b.pW)({ rateLimitPerUser: e });
            }),
            ep(this, "handleChangeThreadMessageSlowmode", (e) => {
                (0, b.pW)({ defaultThreadRateLimitPerUser: e });
            }),
            ep(this, "handleChangeDefaultAutoArchiveDuration", (e) => {
                (0, b.pW)({ defaultAutoArchiveDuration: e });
            }),
            ep(this, "handleRegionChange", (e) => {
                (0, b.pW)({ rtcRegion: e === e_ ? null : e });
            }),
            ep(this, "handleVideoQualityModeChange", (e) => {
                (0, b.pW)({ videoQualityMode: e });
            }),
            ep(this, "handleAutoArchiveDurationChanged", (e) => {
                (0, b.pW)({ autoArchiveDuration: e });
            }),
            ep(this, "handleInvitableChanged", (e) => {
                (0, b.pW)({ invitable: e });
            }),
            ep(this, "handleChannelSummariesToggled", (e) => {
                let { channel: t } = this.props;
                if (null == t) return null;
                let n = (0, ee.mB)(t.flags, ea.zZ.SUMMARIES_DISABLED, !e);
                (0, b.pW)({ flags: n });
            }),
            ep(this, "handleShowMediaOptionsToggled", (e) => {
                let { channel: t } = this.props;
                if (null == t) return null;
                let n = (0, ee.mB)(t.flags, ea.zZ.HIDE_MEDIA_DOWNLOAD_OPTIONS, !e);
                (0, b.pW)({ flags: n });
            });
        let r = null != (n = null == (t = this.props.channel) ? void 0 : t.topic) ? n : "";
        this.state = {
            textTopicValue: r,
            richTopicValue: (0, O.JM)(r),
            topicFocused: !1,
            updateNameInputCursorPosition: !1,
        };
    }
}
function eM() {
    let { errors: e, channel: t, submitting: n, subsection: r } = (0, h.cj)([F.Z], () => F.Z.getProps()),
        s = (0, h.e7)([J.Z], () => {
            var e;
            return J.Z.getRegions(null != (e = null == t ? void 0 : t.getGuildId()) ? e : null);
        }),
        a = (0, h.e7)([U.Z], () => U.Z.theme),
        o = (0, h.e7)([X.Z], () => X.Z.getGuild(null == t ? void 0 : t.getGuildId())),
        c = (0, B.C7)(t),
        d = (0, B.Xb)(t),
        { canManageChannels: u, canSendMessages: g } = (0, h.cj)([q.Z], () => ({
            canManageChannels: q.Z.can(es.Plq.MANAGE_CHANNELS, t),
            canSendMessages: q.Z.can(es.Plq.SEND_MESSAGES, t),
        })),
        p = (0, S.ZP)(t),
        m = z.default.getId(),
        f = (0, L.v)(),
        b = null == t ? void 0 : t.id,
        x = (0, C.ts)(t, !1, !0),
        j = y.Z.useExperiment({
            guildId: null == t ? void 0 : t.guild_id,
            location: "ChannelSettingsOverview",
        }).enabled,
        v = l.useCallback(
            (e) => {
                null != b && f.getState().setLayoutType(b, e);
            },
            [b, f],
        );
    return (0, i.jsx)(eL, {
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
