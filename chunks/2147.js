n.d(t, {
    G: () => eP,
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
    m = n(780384),
    p = n(755721),
    f = n(481060),
    x = n(787014),
    j = n(771340),
    b = n(410575),
    v = n(852860),
    y = n(129865),
    C = n(902840),
    N = n(622822),
    S = n(933557),
    O = n(541716),
    E = n(752305),
    w = n(893718),
    T = n(87432),
    Z = n(600164),
    R = n(313201),
    I = n(318766),
    _ = n(907040),
    P = n(906411),
    A = n(633302),
    L = n(109434),
    D = n(162389),
    M = n(946458),
    k = n(968437),
    B = n(665906),
    V = n(456077),
    U = n(747212),
    H = n(210887),
    G = n(131704),
    W = n(601964),
    F = n(314897),
    z = n(388610),
    X = n(430824),
    q = n(496675),
    Y = n(903223),
    $ = n(594174),
    Q = n(934415),
    J = n(55935),
    K = n(70956),
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
    eh = n(257294),
    eg = n(197571);
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
function ep(e) {
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
let ex = (0, R.hQ)(),
    ej = (0, R.hQ)(),
    eb = (0, R.hQ)(),
    ev = (0, R.hQ)(),
    ey = (0, R.hQ)(),
    eC = (0, R.hQ)(),
    eN = (0, R.hQ)(),
    eS = (0, R.hQ)(),
    eO = (0, R.hQ)(),
    eE = (0, R.hQ)(),
    ew = (0, R.hQ)(),
    eT = (0, G.kt)({
        id: "1",
        type: es.d4z.DM,
    }),
    eZ = {
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
    eI = "AUTOMATIC_RTC_REGION",
    e_ = {
        breakingChangeDate: (0, J.vc)(o()(es.zQD), "LL"),
        helpCenterLink: et.Z.getArticleURL(es.BhN.SLOWMODE),
    },
    eP = h.ZP.connectStores([z.Z], () => {
        let { channel: e, submitting: t } = z.Z.getProps();
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
                    videoQualityMode: m,
                    defaultReactionEmoji: p,
                    availableTags: f,
                    defaultSortOrder: j,
                    defaultForumLayout: b,
                    defaultTagSetting: v,
                } = e;
                e.isThread() && (t = (0, V.Z)(t, !0)),
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
                        videoQualityMode: m,
                        defaultReactionEmoji: p,
                        availableTags: f,
                        defaultSortOrder: j,
                        defaultForumLayout: b,
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
                return (0, i.jsx)(_.Z, {
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
                I.Z,
                ef(ep({}, e), {
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
        null == this.props.regions && null != this.props.guild && j.Z.fetchRegions(this.props.guild.id);
    }
    componentDidUpdate(e) {
        var t, n, i, l;
        let r = null != (i = null == (t = this.props.channel) ? void 0 : t.topic) ? i : "";
        (null != (l = null == (n = e.channel) ? void 0 : n.topic) ? l : "") !== r &&
            r !== this.state.textTopicValue &&
            this.setState({
                textTopicValue: r,
                richTopicValue: (0, E.JM)(r),
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
                ? eu.intl.format(eu.t.EIQq9v, e_)
                : eu.intl.string(eu.t["a+1pdH"])
            : (null == t ? void 0 : t.isThread())
              ? e
                  ? eu.intl.format(eu.t["8sTC8v"], e_)
                  : eu.intl.string(eu.t.OMmNCg)
              : e
                ? eu.intl.format(eu.t.wW2MWl, e_)
                : eu.intl.string(eu.t["HEA/DQ"]);
    }
    getCooldownSliderMarker(e) {
        return (0, en.A)(e, !0);
    }
    getAutoArchiveDurationSliderMarker(e) {
        return (0, en.A)(e * K.Z.Seconds.MINUTE, !0);
    }
    renderChannelInfo(e, t) {
        var n, l, r, a, o, h, m;
        let x,
            j,
            {
                canManageChannels: v,
                canSendMessages: y,
                isThreadModerator: C,
                canManageThread: S,
                guild: E,
                isForumPost: Z,
                isOwner: R,
                showAdvancedSlowModeSetting: I,
            } = this.props,
            _ = G.Ec.has(e.type),
            P = e.isForumLikeChannel(),
            L = P && (null == (n = e.availableTags) ? void 0 : n.every((e) => e.moderated)),
            B = (null == (l = $.default.getCurrentUser()) ? void 0 : l.isStaff()) === !0,
            V = G.TK.has(e.type)
                ? (0, i.jsxs)("div", {
                      children: [
                          (0, i.jsx)(f.xJW, {
                              title: P ? eu.intl.string(eu.t.yR6Hwc) : eu.intl.string(eu.t.X8jMDg),
                              className: eg.marginTop20,
                              children: (0, i.jsx)(w.ZP, {
                                  innerClassName: eh.topic,
                                  characterCountClassName: eh.topicCharacterCount,
                                  maxCharacterCount: P ? ea.Z7 : ea.$x,
                                  onChange: this.handleChangeRichTopic,
                                  placeholder: eu.intl.string(eu.t["71fbmp"]),
                                  channel: eT,
                                  textValue: this.state.textTopicValue,
                                  richValue: this.state.richTopicValue,
                                  type: P ? O.Ie.FORUM_CHANNEL_GUIDELINES : O.Ie.CHANNEL_TOPIC,
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
                              }),
                          }),
                          (0, i.jsx)(f.$i$, { className: s()(eg.marginTop40, eg.marginBottom40) }),
                      ],
                  })
                : null,
            H =
                P && B
                    ? (0, i.jsxs)("div", {
                          children: [
                              (0, i.jsx)(f.xJW, {
                                  title: eu.intl.string(eu.t.qk2jdX),
                                  className: eg.marginTop20,
                                  children: (0, i.jsx)(f.Kx8, {
                                      placeholder: eu.intl.string(eu.t.DDjD1N),
                                      value: A.ZP.translateSurrogatesToInlineEmoji(null != (a = e.template) ? a : ""),
                                      onChange: this.handleChangeTemplate,
                                      error: this.getError("template"),
                                      maxLength: ec.Vb,
                                      disabled: !v,
                                      autosize: !0,
                                      showCharacterCount: !0,
                                  }),
                              }),
                              (0, i.jsx)(f.$i$, { className: s()(eg.marginTop40, eg.marginBottom40) }),
                          ],
                      })
                    : null,
            F = e.isForumLikeChannel()
                ? (0, i.jsxs)("div", {
                      children: [
                          (0, i.jsxs)(f.xJW, {
                              children: [
                                  (0, i.jsx)(f.vwX, {
                                      error: this.getError("available_tags"),
                                      id: ex,
                                      className: eh.formTitle,
                                      children: eu.intl.string(eu.t["P/y+sr"]),
                                  }),
                                  (0, i.jsx)(f.R94, {
                                      id: ej,
                                      type: f.R94.Types.DESCRIPTION,
                                      className: eh.description,
                                      children: eu.intl.string(eu.t["/oQQ39"]),
                                  }),
                                  (0, i.jsx)(D.Z, { channel: e }),
                              ],
                          }),
                          (0, i.jsx)(p.$q, {
                              disabled: !v || L,
                              value: e.hasFlag(ea.zZ.REQUIRE_TAG),
                              type: p.M0.INVERTED,
                              onChange: (e, t) => this.handleRequireTagChanged(t),
                              children: (0, i.jsx)(f.Text, {
                                  variant: "text-sm/normal",
                                  children: eu.intl.string(eu.t["9g2Zys"]),
                              }),
                          }),
                          (0, i.jsx)(f.$i$, { className: s()(eg.marginTop40, eg.marginBottom40) }),
                      ],
                  })
                : null,
            z = e.isForumLikeChannel()
                ? (0, i.jsxs)("div", {
                      children: [
                          (0, i.jsxs)("div", {
                              className: eh.twoColumnSettings,
                              children: [
                                  (0, i.jsxs)("div", {
                                      className: s()(eh.settingsLeft, eh.settingsDefaultReaction),
                                      children: [
                                          (0, i.jsx)(f.vwX, {
                                              id: eb,
                                              className: eh.formTitle,
                                              children: eu.intl.string(eu.t["8ao1+P"]),
                                          }),
                                          (0, i.jsx)(f.R94, {
                                              id: ej,
                                              type: f.R94.Types.DESCRIPTION,
                                              className: eh.description,
                                              children: eu.intl.string(eu.t.SdbF0t),
                                          }),
                                          (0, i.jsxs)("div", {
                                              className: eh.buttonRow,
                                              children: [
                                                  (0, i.jsx)(f.yRy, {
                                                      targetElementRef: this.defaultReactionButtonRef,
                                                      renderPopout: this.renderEmojiPicker,
                                                      position: "right",
                                                      animation: f.yRy.Animation.NONE,
                                                      align: "center",
                                                      children: (e) =>
                                                          (0, i.jsx)(
                                                              p.zx,
                                                              ef(ep({}, e), {
                                                                  buttonRef: this.defaultReactionButtonRef,
                                                                  disabled: !v,
                                                                  onClick: (t) => {
                                                                      var n;
                                                                      null == (n = e.onClick) || n.call(e, t);
                                                                  },
                                                                  children: eu.intl.string(eu.t["59QgaG"]),
                                                              }),
                                                          ),
                                                  }),
                                                  null != e.defaultReactionEmoji
                                                      ? (0, i.jsx)(p.zx, {
                                                            className: eh.removeButton,
                                                            onClick: () => this.handleChangeDefaultReactionEmoji(null),
                                                            size: p.zx.Sizes.MIN,
                                                            look: p.zx.Looks.LINK,
                                                            color: p.zx.Colors.RED,
                                                            children: eu.intl.string(eu.t.N86XcH),
                                                        })
                                                      : null,
                                              ],
                                          }),
                                      ],
                                  }),
                                  (0, i.jsx)(M.Z, { reactionEmoji: e.defaultReactionEmoji }),
                              ],
                          }),
                          (0, i.jsx)(f.$i$, { className: s()(eg.marginTop40, eg.marginBottom40) }),
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
                          (0, i.jsx)(f.$i$, { className: s()(eg.marginTop40, eg.marginBottom40) }),
                      ],
                  })
                : null,
            q = e.isForumLikeChannel()
                ? (0, i.jsxs)("div", {
                      children: [
                          (0, i.jsx)(f.xJW, {
                              children: (0, i.jsx)(f.hjN, {
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
                          }),
                          (0, i.jsx)(f.R94, {
                              className: eg.marginTop8,
                              type: f.R94.Types.DESCRIPTION,
                              children: eu.intl.string(eu.t["165cVV"]),
                          }),
                          (0, i.jsx)(f.$i$, { className: s()(eg.marginTop40, eg.marginBottom40) }),
                      ],
                  })
                : null,
            Y = e.isForumLikeChannel()
                ? (0, i.jsxs)("div", {
                      children: [
                          (0, i.jsx)(f.xJW, {
                              children: (0, i.jsx)(f.hjN, {
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
                          }),
                          (0, i.jsx)(f.R94, {
                              className: eg.marginTop8,
                              type: f.R94.Types.DESCRIPTION,
                              children: eu.intl.string(eu.t.DqOl8P),
                          }),
                          (0, i.jsx)(f.$i$, { className: s()(eg.marginTop40, eg.marginBottom40) }),
                      ],
                  })
                : null,
            Q = _ ? C : v,
            J =
                null ==
                (r = T.Z.getCurrentConfig({
                    guildId: e.guild_id,
                    location: "ChannelSettingsOverview",
                }))
                    ? void 0
                    : r.enabled,
            K = G.X_.has(e.type)
                ? (0, i.jsxs)("div", {
                      children: [
                          (0, i.jsxs)(f.xJW, {
                              children: [
                                  (0, i.jsx)(f.vwX, {
                                      id: ev,
                                      className: eg.marginBottom8,
                                      children: eu.intl.string(eu.t["tTHx9/"]),
                                  }),
                                  P
                                      ? (0, i.jsx)(f.vwX, {
                                            className: eg.marginTop20,
                                            children: eu.intl.string(eu.t.O1c02t),
                                        })
                                      : null,
                                  !0 === I
                                      ? (0, i.jsx)(ei.Z, {
                                            channel: e,
                                            onChange: this.handleChangeSlowmode,
                                        })
                                      : (0, i.jsx)(f.iRW, {
                                            className: eg.marginTop20,
                                            initialValue: e.rateLimitPerUser,
                                            markers: es.BiE,
                                            stickToMarkers: !0,
                                            onValueChange: this.handleChangeSlowmode,
                                            onMarkerRender: this.getCooldownSliderMarker,
                                            disabled: !Q,
                                            equidistant: !0,
                                            "aria-labelledby": ev,
                                            "aria-describedby": ey,
                                        }),
                                  (0, i.jsx)(f.R94, {
                                      id: ey,
                                      type: f.R94.Types.DESCRIPTION,
                                      children: this.getSlowmodeHelpText(J),
                                  }),
                                  P
                                      ? (0, i.jsxs)(i.Fragment, {
                                            children: [
                                                (0, i.jsx)(f.vwX, {
                                                    className: eg.marginTop20,
                                                    children: eu.intl.string(eu.t["fkY5+v"]),
                                                }),
                                                (0, i.jsx)(f.iRW, {
                                                    className: eg.marginTop20,
                                                    initialValue: null != (h = e.defaultThreadRateLimitPerUser) ? h : 0,
                                                    markers: es.BiE,
                                                    stickToMarkers: !0,
                                                    onValueChange: this.handleChangeThreadMessageSlowmode,
                                                    onMarkerRender: this.getCooldownSliderMarker,
                                                    disabled: !Q,
                                                    equidistant: !0,
                                                    "aria-labelledby": ev,
                                                    "aria-describedby": ey,
                                                }),
                                                (0, i.jsx)(f.R94, {
                                                    type: f.R94.Types.DESCRIPTION,
                                                    children: J
                                                        ? eu.intl.format(eu.t.nZSuEh, e_)
                                                        : eu.intl.string(eu.t.kdZU6O),
                                                }),
                                            ],
                                        })
                                      : null,
                              ],
                          }),
                          (0, i.jsx)(f.$i$, { className: s()(eg.marginTop40, eg.marginBottom40) }),
                      ],
                  })
                : null,
            ee =
                _ && null != e.threadMetadata
                    ? (0, i.jsxs)("div", {
                          children: [
                              (0, i.jsx)(f.xJW, {
                                  children: (0, i.jsx)(b.Z, {
                                      page: es.ZY5.CHANNEL_SETTINGS,
                                      children: (0, i.jsx)(U.Z, {
                                          isDisabled: !S,
                                          autoArchiveDuration:
                                              null != (m = e.threadMetadata.autoArchiveDuration) ? m : ed.AX,
                                          onChange: this.handleAutoArchiveDurationChanged,
                                      }),
                                  }),
                              }),
                              (0, i.jsx)(f.R94, {
                                  className: eg.marginTop8,
                                  type: f.R94.Types.DESCRIPTION,
                                  children: Z ? eu.intl.string(eu.t["3aJN9P"]) : eu.intl.string(eu.t.YUXr4e),
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
            eo = null != E && (0, W.Y2)(E),
            em = G.ov.has(e.type)
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
                null != E &&
                E.features.has(es.oNc.NEWS) &&
                e.id !== (null == E ? void 0 : E.rulesChannelId) &&
                e.id !== (null == E ? void 0 : E.publicUpdatesChannelId)
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
                          (0, i.jsx)(f.$i$, { className: s()(eg.marginTop40, eg.marginBottom40) }),
                          (0, i.jsx)(b.Z, {
                              page: es.ZY5.CHANNEL_SETTINGS,
                              children: (0, i.jsx)(U.Z, {
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
                          (null == E ? void 0 : E.features.has(es.oNc.SUMMARIES_ENABLED_BY_USER)),
                      hideBorder: !0,
                      disabled: !v || !(null == E ? void 0 : E.features.has(es.oNc.SUMMARIES_ENABLED_BY_USER)),
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
            eO = e.isMediaChannel()
                ? (0, i.jsxs)("div", {
                      children: [
                          (0, i.jsx)(f.$i$, { className: s()(eg.marginTop40, eg.marginBottom40) }),
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
        return (
            e.type === es.d4z.GUILD_CATEGORY
                ? ((j = eu.intl.string(eu.t.OCAkGB)), (x = "category-name"))
                : e.isForumPost()
                  ? ((j = eu.intl.string(eu.t.uyVrTE)), (x = "post-title"))
                  : _
                    ? ((j = eu.intl.string(eu.t.j3XWjI)), (x = "thread-name"))
                    : ((j = eu.intl.string(eu.t.PVbHDg)), (x = "channel-name")),
            (0, i.jsxs)("div", {
                children: [
                    (0, i.jsx)(f.oil, {
                        label: j,
                        fullWidth: !0,
                        inputRef: this.nameInputRef,
                        value: t,
                        onChange: this.handleChangeName,
                        onBlur: this.handleBlurName,
                        error: this.getError("name"),
                        name: x,
                        autoFocus: !0,
                        disabled: R ? !y : !v,
                        maxLength: es.HN8,
                        trailing: {
                            type: "emoji",
                            button: (0, i.jsx)(eA, {
                                onEmojiPicked: this.insertEmojiAtPosition,
                                channel: e,
                                guildId: null == e ? void 0 : e.guild_id,
                            }),
                        },
                    }),
                    (0, i.jsx)(f.$i$, { className: s()(eg.marginTop40, eg.marginBottom40) }),
                    V,
                    H,
                    F,
                    z,
                    K,
                    ee,
                    X,
                    q,
                    Y,
                    en,
                    em,
                    eC,
                    eS,
                    eN,
                    eO,
                ],
            })
        );
    }
    renderBitrate(e) {
        return "".concat(Math.round(e / 1000), "kbps");
    }
    renderVoiceBitrate(e, t) {
        let { canManageChannels: n } = this.props;
        if (!this.showVoiceSettings()) return null;
        let l = (0, Q.g7)(t, e),
            r = this.getError("bitrate");
        return (0, i.jsxs)(Z.Z, {
            direction: Z.Z.Direction.VERTICAL,
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
        return (0, i.jsxs)(Z.Z, {
            direction: Z.Z.Direction.VERTICAL,
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
        return (0, i.jsxs)(Z.Z, {
            direction: Z.Z.Direction.VERTICAL,
            className: eg.marginBottom40,
            children: [
                (0, i.jsx)(f.vwX, {
                    id: eO,
                    children: eu.intl.string(eu.t["/AoSGB"]),
                }),
                "" !== n &&
                    (0, i.jsx)(f.R94, {
                        id: eE,
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
                    "aria-labelledby": eO,
                    "aria-describedby": null != n && "" !== n ? eE : ew,
                }),
                (0, i.jsx)(f.R94, {
                    id: ew,
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
                value: eI,
            });
        let a = null != (t = e.rtcRegion) ? t : eI;
        return (0, i.jsxs)(Z.Z, {
            direction: Z.Z.Direction.VERTICAL,
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
                    ? (0, m.wj)(l)
                        ? n(309095)
                        : n(925442)
                    : (0, m.wj)(l)
                      ? n(316491)
                      : n(301358)),
            (0, i.jsx)(Z.Z, {
                justify: Z.Z.Justify.CENTER,
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
                      this.showVoiceSettings()
                          ? (0, i.jsx)(f.$i$, { className: s()(eg.marginTop40, eg.marginBottom40) })
                          : null,
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
                return (0, i.jsx)(_.Z, {
                    guildId: null == n ? void 0 : n.guild_id,
                    closePopout: t,
                    onSelectEmoji: (e) => {
                        let { emoji: n, willClose: i } = e;
                        this.handleChangeDefaultReactionEmoji(n), i && t();
                    },
                    pickerIntention: eo.Hz.COMMUNITY_CONTENT,
                    channel: n,
                    analyticsOverride: eZ,
                });
            }),
            em(this, "handleRequireTagChanged", (e) => {
                let { channel: t } = this.props;
                if (null == t) return null;
                let n = (0, ee.mB)(t.flags, ea.zZ.REQUIRE_TAG, e);
                (0, x.pW)({ flags: n });
            }),
            em(this, "handleChangeName", (e) => {
                var t, n;
                let { channel: i } = this.props;
                if (null == i) return;
                i.isThread() ? (e = (0, V.Z)(e, !1)) : es.TPd.LIMITED_CHANNEL_NAME.has(i.type) && (e = (0, Q.Nj)(e));
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
                    let e = (0, V.Z)(t, !0);
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
                (0, x.pW)({ topic: A.ZP.translateInlineEmojiToSurrogates(e) });
            }),
            em(this, "handleChangeRichTopic", (e, t, n) => {
                this.setState({
                    textTopicValue: t,
                    richTopicValue: n,
                }),
                    this.handleChangeTopic(t);
            }),
            em(this, "handleChangeTemplate", (e) => {
                (0, x.pW)({ template: A.ZP.translateInlineEmojiToSurrogates(e) });
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
                let n = (0, ee.mB)(t.flags, ea.zZ.ACTIVE_CHANNELS_REMOVED, !e);
                (0, x.pW)({ flags: n });
            }),
            em(this, "handleNewsChange", (e) => {
                (0, x.pW)({ type: e ? es.d4z.GUILD_ANNOUNCEMENT : es.d4z.GUILD_TEXT });
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
                let n = (0, ee.mB)(t.flags, ea.zZ.SUMMARIES_DISABLED, !e);
                (0, x.pW)({ flags: n });
            }),
            em(this, "handleShowMediaOptionsToggled", (e) => {
                let { channel: t } = this.props;
                if (null == t) return null;
                let n = (0, ee.mB)(t.flags, ea.zZ.HIDE_MEDIA_DOWNLOAD_OPTIONS, !e);
                (0, x.pW)({ flags: n });
            });
        let r = null != (n = null == (t = this.props.channel) ? void 0 : t.topic) ? n : "";
        this.state = {
            textTopicValue: r,
            richTopicValue: (0, E.JM)(r),
            topicFocused: !1,
            updateNameInputCursorPosition: !1,
        };
    }
}
function eD() {
    let { errors: e, channel: t, submitting: n, subsection: r } = (0, h.cj)([z.Z], () => z.Z.getProps()),
        s = (0, h.e7)([Y.Z], () => {
            var e;
            return Y.Z.getRegions(null != (e = null == t ? void 0 : t.getGuildId()) ? e : null);
        }),
        a = (0, h.e7)([H.Z], () => H.Z.theme),
        o = (0, h.e7)([X.Z], () => X.Z.getGuild(null == t ? void 0 : t.getGuildId())),
        c = (0, B.C7)(t),
        d = (0, B.Xb)(t),
        { canManageChannels: u, canSendMessages: g } = (0, h.cj)([q.Z], () => ({
            canManageChannels: q.Z.can(es.Plq.MANAGE_CHANNELS, t),
            canSendMessages: q.Z.can(es.Plq.SEND_MESSAGES, t),
        })),
        m = (0, S.ZP)(t),
        p = F.default.getId(),
        f = (0, L.v)(),
        x = null == t ? void 0 : t.id,
        j = (0, C.ts)(t, !1, !0),
        b = y.Z.useExperiment({
            guildId: null == t ? void 0 : t.guild_id,
            location: "ChannelSettingsOverview",
        }).enabled,
        v = l.useCallback(
            (e) => {
                null != x && f.getState().setLayoutType(x, e);
            },
            [x, f],
        );
    return (0, i.jsx)(eL, {
        errors: e,
        channel: t,
        channelName: m,
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
        isOwner: null == t ? void 0 : t.isOwner(p),
        handleSetDefaultLayout: v,
        showChannelSummariesSettings: j,
        showAdvancedSlowModeSetting: b,
    });
}
