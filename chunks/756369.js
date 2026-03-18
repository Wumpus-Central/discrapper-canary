n.d(t, { Ay: () => e7, OC: () => e2, iV: () => e1 }), n(938796);
var i = n(627968),
    r = n(64700),
    a = n(503698),
    l = n.n(a),
    s = n(448761),
    o = n(665260),
    d = n(311907),
    c = n(803805),
    u = n(52133),
    _ = n(397927),
    m = n(843472),
    h = n(488331),
    p = n(298481),
    g = n(121401),
    A = n(509282),
    x = n(909338),
    f = n(948729),
    C = n(150099),
    I = n(871751),
    E = n(510790),
    v = n(167189),
    b = n(175335),
    T = n(390248),
    y = n(282108),
    S = n(33358),
    N = n(704400),
    j = n(496376),
    L = n(795982),
    R = n(643612),
    P = n(613760),
    w = n(229527),
    M = n(870136),
    D = n(33525),
    k = n(484724),
    O = n(71755),
    U = n(178879),
    B = n(118331),
    G = n(520586),
    F = n(857071),
    H = n(384231),
    V = n(46054),
    q = n(731068),
    W = n(619517),
    Y = n(207133),
    z = n(480191),
    Q = n(269849),
    K = n(704413),
    J = n(695206),
    X = n(892742),
    Z = n(376708),
    $ = n(549527),
    ee = n(302031),
    et = n(899894),
    en = n(581034),
    ei = n(50777),
    er = n(378058),
    ea = n(443642),
    el = n(406704),
    es = n(996522),
    eo = n(253932),
    ed = n(383233),
    ec = n(961350),
    eu = n(696451),
    e_ = n(834942),
    em = n(576705),
    eh = n(287809),
    ep = n(644447),
    eg = n(954571),
    eA = n(927813),
    ex = n(659674),
    ef = n(661191),
    eC = n(998218),
    eI = n(988012),
    eE = n(294520),
    ev = n(141468),
    eb = n(863439),
    eT = n(869938),
    ey = n(143413),
    eS = n(707985),
    eN = n(443228),
    ej = n(875033),
    eL = n(341645),
    eR = n(986350),
    eP = n(439401),
    ew = n(466802),
    eM = n(990560),
    eD = n(266620),
    ek = n(860227),
    eO = n(564107),
    eU = n(763899),
    eB = n(652176),
    eG = n(382807),
    eF = n(394839),
    eH = n(96782),
    eV = n(573163),
    eq = n(861986),
    eW = n(937266),
    eY = n(343552),
    ez = n(581619),
    eQ = n(652215),
    eK = n(985018),
    eJ = n(867525);
let eX = [eQ.Auw.GIFV],
    eZ = 15 * eA.A.Millis.MINUTE,
    e$ = new Set(["discord-developers", "discord-testers", "discord-townhall", "discordgameslab"]),
    e0 = (e) => () => {
        let { url: t, proxyUrl: n, width: r, height: a, flags: l } = e,
            s = (0, o.Lt)(l, q.e5.IS_ANIMATED);
        return null != r && null != a && (W.bp.test(n) || (s && (W.P8.test(n) || W.p4.test(n))))
            ? (0, i.jsx)(eP.A, { width: r, height: a, src: n, url: t, format: c.TL.IMAGE, className: eJ.jj })
            : null;
    };
class e1 extends r.Component {
    static defaultProps = { renderEmbeds: !0, compact: !1 };
    state = { showSuppressModal: !1, showRemoveAttachmentModal: !1, attachmentToDelete: null };
    getAcceptInviteContext = (e) => {
        let { channel: t, message: n } = this.props;
        return {
            location: e,
            location_guild_id: t.getGuildId(),
            location_channel_id: t.id,
            location_channel_type: t.type,
            location_message_id: n.id,
        };
    };
    shouldRenderInvite(e) {
        let { channel: t } = this.props;
        return !(t.isDM() && !t.isSystemDM() && !t.isGroupDM() && e$.has(e));
    }
    shouldComponentUpdate(e, t) {
        var n, i;
        let { channel: r, message: a, poll: l } = this.props,
            { channel: s, message: o, poll: d } = e;
        return (
            !(0, u.A)(this.state, t) ||
            !(0, u.A)(this.props, e, ["message", "channel"]) ||
            r.type !== s.type ||
            d !== l ||
            o.codedLinks !== a.codedLinks ||
            o.flags !== a.flags ||
            o.giftCodes !== a.giftCodes ||
            o.attachments !== a.attachments ||
            o.embeds !== a.embeds ||
            o.components !== a.components ||
            o.activity !== a.activity ||
            ((n = o.reactions) !== (i = a.reactions) &&
                (n.length !== i.length ||
                    !!n.some((e, t) => {
                        let { emoji: n, count: r, burst_count: a } = e,
                            { emoji: l, count: s, burst_count: o } = i[t];
                        return a !== o || r !== s || n.id !== l.id || n.name !== l.name;
                    })))
        );
    }
    renderCtaButton() {
        let { message: e, channel: t, ctaButtonType: n } = this.props,
            r = null;
        switch (n) {
            case eI.xC.MARK_AS_FALSE_POSITIVE:
                r = (0, i.jsx)(j.A, { messageId: e.id, channelId: t.id });
                break;
            case eI.xC.AGE_VERIFICATION_RETRY:
                r = (0, i.jsx)(p.A, { channelId: t.id });
                break;
            default:
                return null;
        }
        return (0, i.jsx)("div", { className: eJ.od, children: r });
    }
    renderCodedLinks(e) {
        return 0 === e.codedLinks.length
            ? null
            : e.codedLinks.map((t) => {
                  let { type: n, code: r, url: a } = t;
                  if (n === v.I.INVITE)
                      return this.shouldRenderInvite(r)
                          ? (0, i.jsx)(
                                eM.A,
                                { code: r, message: e, getAcceptInviteContext: this.getAcceptInviteContext },
                                r,
                            )
                          : null;
                  if (n === v.I.TEMPLATE) return (0, i.jsx)(O.A, { code: r }, r);
                  if (n === v.I.EVENT) return (0, i.jsx)(k.A, { code: r }, r);
                  if (n === v.I.CHANNEL_LINK) return (0, i.jsx)(eN.A, { code: r, message: e }, r);
                  if (n === v.I.APP_DIRECTORY_PROFILE) return (0, i.jsx)(P.A, { code: r, message: e }, r);
                  else if (n === v.I.ACTIVITY_BOOKMARK) {
                      let { referrerId: t = e.author.id, customId: n, linkId: l } = (0, x.N)(a);
                      return (0, i.jsx)(
                          h.A,
                          { applicationId: r, message: e, referrerId: t, customId: n, linkId: l },
                          r,
                      );
                  } else if (n === v.I.GUILD_PRODUCT) return (0, i.jsx)(D.A, { code: r }, r);
                  else if (n === v.I.SERVER_SHOP) return (0, i.jsx)(b.A, { guildId: r }, r);
                  else if (n === v.I.SOCIAL_LAYER_STOREFRONT) {
                      let [e, t] = r.split("-"),
                          { channel: n } = this.props;
                      return (0, i.jsx)(ei.A, { guildId: t, skuId: e, channel: n }, r);
                  } else if (n === v.I.QUESTS_EMBED) return (0, i.jsx)(X.A, { questId: r }, r);
                  else if (n === v.I.APP_DIRECTORY_STOREFRONT) return (0, i.jsx)(A.G, { appId: r, message: e }, r);
                  else if (n === v.I.APP_DIRECTORY_STOREFRONT_SKU) {
                      let t = (0, g.u)(r);
                      return null == t
                          ? null
                          : (0, i.jsx)(A.$, { appId: t.applicationId, skuId: t.skuId, message: e }, r);
                  } else if (n === v.I.APP_OAUTH2_LINK) return (0, i.jsx)(f.A, { applicationId: r, message: e }, r);
                  else if (n === v.I.COLLECTIBLES_SHOP) return null;
                  else if (n === v.I.EXPERIMENT) return null;
                  else throw Error(`Unknown coded link type: ${n}`);
              });
    }
    renderGiftCodes(e) {
        let { giftCodes: t, author: n, channel_id: r, type: a, content: l, giftInfo: s } = e,
            o = eh.default.getCurrentUser();
        return null != o && t.length > 0
            ? t.map((e) =>
                  (0, i.jsx)(
                      "div",
                      {
                          className: eJ.zv,
                          children: (0, i.jsx)(ew.A, {
                              code: e,
                              author: n,
                              channelId: r,
                              currentUser: o,
                              type: a,
                              content: l,
                              giftInfo: s,
                          }),
                      },
                      e,
                  ),
              )
            : null;
    }
    renderReactions(e) {
        let {
            disableReactionCreates: t,
            disableReactionReads: n,
            disableReactionUpdates: r,
            isLurking: a,
            isPendingMember: l,
            channel: s,
            forceAddReactions: o,
        } = this.props;
        return n
            ? null
            : (0, i.jsx)(eV.A, {
                  message: e,
                  channel: s,
                  disableReactionCreates: t,
                  disableReactionUpdates: r,
                  isLurking: a,
                  isPendingMember: l,
                  forceAddReactions: o,
                  useChatFontScaling: !0,
              });
    }
    renderAttachments(e) {
        let {
                channel: t,
                gifAutoPlay: n,
                canDeleteAttachments: r,
                inlineAttachmentMedia: a,
                onMediaItemContextMenu: l,
                enabledContentHarmTypeFlags: s,
                shouldHideMediaOptions: d,
            } = this.props,
            { attachments: c, flags: u } = e;
        if (0 === c.length || e.isPoll() || (0, ed._c)(e)) return null;
        let _ = c.filter((e) => null == e.flags || !(0, o.Lt)(e.flags, eQ.sbO.IS_THUMBNAIL));
        if (0 === _.length) return null;
        let m = _.map((t) => ({
                ...(0, q.Rr)(t, e),
                original: t.url,
                srcIsAnimated: (0, o.Lt)(t.flags ?? 0, eQ.sbO.IS_ANIMATED),
            })).filter((e) => "INVALID" !== e.type),
            { srcToOnClickOverride: h, srcToHandlePreloadImage: p } = (0, Q.o)(
                m,
                { enabledContentHarmTypeFlags: s, shouldHideMediaOptions: d },
                "Media Mosaic",
            ),
            g = m.length > 1,
            A = (0, o.Lt)(u, eQ.pr7.IS_VOICE_MESSAGE);
        function x(e, t) {
            return (0, eE.iW)(e.originalItem, t);
        }
        let f = _.map((i) => {
            let s = (0, q.aG)(i),
                o = {
                    message: e,
                    item: (0, eH.rC)(i, a),
                    autoPlayGif: n,
                    canRemoveItem: r && (_.length > 1 || "" !== e.content),
                    onRemoveItem: this.handleRemoveAttachment,
                    getObscureReason: x,
                    onContextMenu:
                        null != l
                            ? (e) => {
                                  e.stopPropagation(), e.preventDefault(), l(e, s);
                              }
                            : void 0,
                    renderAudioComponent: A ? eD.SX : eD.Nj,
                    renderImageComponent: eD.Cr,
                    renderVideoComponent: eD.I1,
                    renderPlaintextFilePreview: eD.R6,
                    renderGenericFileComponent: eD.UB,
                    renderMosaicItemFooter: eD.YE,
                    onPlay: (e, n, r) => {
                        eg.default.track(eQ.HAw.MEDIA_ATTACHMENT_PLAYBACK_STARTED, {
                            guild_id: t.guild_id,
                            channel_id: t.id,
                            channel_type: t.type,
                            type: i.content_type,
                            flags: i.flags,
                            size: i.size,
                            duration: r,
                        });
                    },
                    gifFavoriteButton: e0(s),
                },
                d = (0, ep.E)({ proxyURL: i.proxy_url, url: i.url });
            return d in h && g && ((o.onClick = h[d]), (o.handlePreloadImage = p[d])), o;
        });
        return (0, i.jsx)(eF.A, { items: f });
    }
    renderEmbed = (e, t, n, r) => {
        let {
                gifAutoPlay: a,
                inlineEmbedMedia: l,
                canSuppressEmbeds: s,
                hasSpoilerEmbeds: o,
                enabledContentHarmTypeFlags: d,
                shouldAgeVerify: c,
            } = this.props,
            u = (0, eE.sC)(e, r, o, d);
        if (e.type === eQ.Auw.GIFT) return null;
        let _ = eX.includes(e.type) ? e.url : (e.image?.url ?? e.video?.url);
        return (0, i.jsx)(
            R.G.Provider,
            {
                value: (0, eY.b)(_, e.image, e.video, e.thumbnail, e.provider?.name),
                children: (0, i.jsx)(I.Ay, {
                    embed: e,
                    obscureReason: u ?? void 0,
                    autoPlayGif: a,
                    hideMedia: !l,
                    allowFullScreen: !this.props.disableComponentInteractivity,
                    onSuppressEmbed: s ? this.handleEmbedSuppressed : void 0,
                    renderTitle: this.renderEmbedTitle,
                    renderDescription: this.renderEmbedDescription,
                    message: r,
                    embedIndex: t,
                    shouldAgeVerify: c ?? !1,
                    ...n,
                }),
            },
            e.id,
        );
    };
    renderEmbedTitle = (e, t) =>
        e.type !== eQ.Auw.RICH
            ? t
            : (null != e.url && "" !== e.url ? V.A.parseEmbedTitleWithoutLinks : V.A.parseEmbedTitle)(t, !0, {
                  channelId: this.props.channel.id,
              });
    renderEmbedDescription = (e, t, n) =>
        e.type === eQ.Auw.RICH
            ? V.A.parse(t, !0, {
                  channelId: this.props.channel.id,
                  allowLinks: !0,
                  allowEmojiLinks: !0,
                  allowList: this.props.showListsAndHeaders,
                  allowHeading: !n && this.props.showListsAndHeaders,
                  previewLinkTarget: this.props.showMaskedLinks,
              })
            : t;
    handleEmbedSuppressed = (e) => {
        let { channel: t, message: n } = this.props;
        e.shiftKey ? m.A.suppressEmbeds(t.id, n.id) : this.setState({ showSuppressModal: !0 });
    };
    handleRemoveAttachment = (e) => {
        let t = e.originalItem;
        this.setState({ showRemoveAttachmentModal: !0, attachmentToDelete: t });
    };
    renderEmbeds(e) {
        let { renderEmbeds: t, hasBailedAst: n } = this.props;
        return 0 === e.embeds.length || !t || n
            ? null
            : e.embeds.map((t, n) => {
                  if (
                      ez.z.has(t.type) ||
                      (0, ex.p6)(t) ||
                      ((0, U.f)(t) && !(0, B.d)(e)) ||
                      (0, ex.V)(t) ||
                      (0, ex.G8)(t)
                  )
                      return null;
                  if (t.type === eQ.Auw.COMPONENTS && null != t.components && t.components.length > 0) {
                      var r = this;
                      let {
                              gifAutoPlay: n,
                              enabledContentHarmTypeFlags: a,
                              shouldHideMediaOptions: l,
                              onMediaItemContextMenu: s,
                              canSuppressEmbeds: o,
                              hasSpoilerEmbeds: d,
                          } = this.props,
                          c = (0, eE.sC)(t, e, d, a),
                          u = function () {
                              let d = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                              return (0, i.jsx)(
                                  ej.A,
                                  {
                                      components: t.components ?? [],
                                      message: e,
                                      gifAutoPlay: n,
                                      getGifFavButton: e0,
                                      getOnMediaItemContextMenu:
                                          null == s
                                              ? void 0
                                              : (e) => (t) => {
                                                    t.stopPropagation(), t.preventDefault(), s?.(t, e);
                                                },
                                      shouldHideMediaOptions: l,
                                      enabledContentHarmTypeFlags: a,
                                      onSuppressEmbed: o ? r.handleEmbedSuppressed : void 0,
                                      hiddenSpoiler: d,
                                  },
                                  t.id,
                              );
                          };
                      return null != c
                          ? (0, i.jsx)(
                                ee.Ay,
                                {
                                    type: ee.Ay.Types.EMBED,
                                    reason: c,
                                    isSingleMosaicItem: !0,
                                    containerStyles: { width: "fit-content" },
                                    children: (e) => u(e),
                                },
                                t.id,
                            )
                          : u();
                  }
                  let a = { renderImageComponent: eB.LL, renderVideoComponent: eB.$o, renderLinkComponent: eB.bU };
                  if (
                      t.type === eQ.Auw.ARTICLE &&
                      null != t.url &&
                      /^https?:\/\/(?:canary|ptb|www)?\.discord(?:app)?\.com\/store\/skus\/(?:[0-9]+)/.test(t.url) &&
                      null != t.provider &&
                      "Discord" === t.provider.name
                  ) {
                      let r = eC.A.safeParseWithQuery(t.url);
                      if (null != r && null != r.pathname) {
                          let l = r.pathname.split("/")[3];
                          if (null != l)
                              return (0, i.jsx)(
                                  eW.A,
                                  { skuId: l, renderFallback: () => this.renderEmbed(t, n, a, e) },
                                  t.id,
                              );
                      }
                  }
                  return this.renderEmbed(t, n, a, e);
              });
    }
    renderComponentAccessories(e) {
        if (0 === e.components.length) return null;
        let {
            gifAutoPlay: t,
            enabledContentHarmTypeFlags: n,
            shouldHideMediaOptions: r,
            disableComponentInteractivity: a,
            onMediaItemContextMenu: l,
        } = this.props;
        return (0, i.jsx)(eO.N, {
            gifAutoPlay: t,
            getGifFavButton: e0,
            getOnMediaItemContextMenu:
                null == l
                    ? void 0
                    : (e) => (t) => {
                          t.stopPropagation(), t.preventDefault(), l?.(t, e);
                      },
            shouldHideMediaOptions: r,
            enabledContentHarmTypeFlags: n,
            children: (0, i.jsx)(G.Ay, { message: e, shouldDisableInteractiveComponents: a }),
        });
    }
    renderActivityInvite(e) {
        if (null == e.activity) return null;
        let { channel: t } = this.props;
        return (0, i.jsx)(eU.A, { channel: t, message: e, hideParty: !1 });
    }
    renderPublishBump(e) {
        return this.props.channel.type !== eQ.rbe.GUILD_ANNOUNCEMENT || this.props.isMessageSnapshot
            ? null
            : (0, i.jsx)(C.A, { channelId: e.channel_id, messageId: e.id });
    }
    renderEphemeralAccessories(e) {
        return (0, ev.ec)(e)
            ? (0, i.jsx)(eR.A, {
                  message: e,
                  onDeleteMessage: () => {
                      m.A.dismissAutomatedMessage(e);
                  },
              })
            : null;
    }
    renderStickersAccessories(e) {
        let t = (0, er.o6)(e),
            { channel: n, isInteracting: r } = this.props;
        return 0 === t.length
            ? null
            : t.map((e) => (0, i.jsx)(ea.A, { channel: n, isInteracting: r, renderableSticker: e }, e.id));
    }
    renderThreadAccessories(e) {
        if (e.hasFlag(eQ.pr7.HAS_THREAD) && !1 !== this.props.renderThreadAccessory)
            return (0, i.jsx)(es.A, { message: e, compact: this.props.compact });
    }
    renderThreadRoleMentionWarning(e) {
        if (
            e.hasFlag(eQ.pr7.FAILED_TO_MENTION_SOME_ROLES_IN_THREAD) &&
            this.props.isCurrentUser &&
            !(Date.now() - ef.default.extractTimestamp(e.id) >= eZ)
        )
            return (0, i.jsx)("div", { className: eJ.xM, children: eK.intl.string(eK.t.ma8Rs0) });
    }
    renderSuppressConfirmModal() {
        let { channel: e, message: t } = this.props;
        return (0, i.jsxs)(_.MJ3, {
            dismissable: !0,
            header: eK.intl.string(eK.t.VL1KOk),
            confirmText: eK.intl.string(eK.t.YEHppG),
            cancelText: eK.intl.string(eK.t["ETE/oC"]),
            onCancel: () => this.setState({ showSuppressModal: !1 }),
            onConfirm: () => {
                m.A.suppressEmbeds(e.id, t.id), this.setState({ showSuppressModal: !1 });
            },
            children: [
                (0, i.jsx)(_.Text, {
                    variant: "text-md/normal",
                    color: "text-default",
                    className: eJ.IX,
                    children: eK.intl.string(eK.t["vXZ+Fo"]),
                }),
                (0, i.jsx)(_.Text, {
                    variant: "text-md/normal",
                    color: "text-muted",
                    children: eK.intl.string(eK.t["5j2by3"]),
                }),
            ],
        });
    }
    renderRemoveAttachmentConfirmModal() {
        let { channel: e, message: t } = this.props,
            { attachmentToDelete: n } = this.state;
        return null == n
            ? void this.setState({ showRemoveAttachmentModal: !1 })
            : (0, i.jsx)(_.MJ3, {
                  dismissable: !0,
                  header: eK.intl.string(eK.t.CbTIEo),
                  confirmText: eK.intl.string(eK.t.kFwAsa),
                  cancelText: eK.intl.string(eK.t["ETE/oC"]),
                  onCancel: () => this.setState({ showRemoveAttachmentModal: !1, attachmentToDelete: null }),
                  onConfirm: () => {
                      let i = t.attachments.filter((e) => e.id !== n.id);
                      m.A.patchMessageAttachments(e.id, t.id, i),
                          this.setState({ showRemoveAttachmentModal: !1, attachmentToDelete: null });
                  },
                  children: (0, i.jsx)(_.Text, {
                      variant: "text-md/normal",
                      color: "text-default",
                      className: eJ.IX,
                      children: eK.intl.string(eK.t.faHmO3),
                  }),
              });
    }
    renderInteractionPremiumUpsell(e) {
        let t = e.applicationId;
        return e.type !== s.l.INTERACTION_PREMIUM_UPSELL || null == t
            ? null
            : (0, i.jsx)(eG.A, { applicationId: t, guildId: this.props.channel.guild_id });
    }
    renderEmbeddedApplicationInstanceEmbed(e) {
        let { application: t, activityInstance: n } = e;
        return null == t || null == n
            ? null
            : (0, i.jsx)(eL.A, {
                  application: t,
                  channelId: this.props.channel.id,
                  guildId: this.props.channel.guild_id,
                  message: e,
              });
    }
    renderMediaPostEmbeds(e) {
        return e.embeds.flatMap((t) =>
            t.type !== eQ.Auw.POST_PREVIEW || null == t.url
                ? []
                : (0, i.jsx)(z.A, { embedUrl: t.url, message: e, channel: this.props.channel }, t.id),
        );
    }
    renderSafetyPolicyNotice(e) {
        return 1 === e.embeds.length && e.embeds[0].type === eQ.Auw.SAFETY_POLICY_NOTICE
            ? (0, i.jsx)(et.V, { message: e })
            : null;
    }
    renderSafetySystemNotification(e) {
        return 1 === e.embeds.length && e.embeds[0].type === eQ.Auw.SAFETY_SYSTEM_NOTIFICATION
            ? (0, i.jsx)(en.l, { embed: e.embeds[0] })
            : null;
    }
    renderMediaObscureNotice(e) {
        return (0 !== e.attachments.length || 0 !== e.embeds.length) && (0, y.KM)(e)
            ? (0, i.jsx)(N.A, { message: e })
            : null;
    }
    renderPoll(e, t) {
        if (null != t) return (0, i.jsx)(J.A, { message: e, poll: t, className: eJ.PM });
    }
    renderShareClientTheme(e) {
        return null != e.sharedClientTheme ? (0, i.jsx)(E.f, { message: e }) : null;
    }
    renderReportedMessage(e) {
        if (e.messageSnapshots.length > 0 && (0, Z.Mn)(e, this.props.channel)) return (0, i.jsx)($.A, { message: e });
    }
    renderForwardedMessage(e) {
        if (e.messageSnapshots.length > 0 && !(0, Z.Mn)(e, this.props.channel)) return (0, i.jsx)(L.A, { message: e });
    }
    renderEditedTag(e, t) {
        return (0, i.jsx)(eq.A, { message: e, compact: t, location: eq.O.AFTER_ACCESSORIES });
    }
    render() {
        let { className: e, message: t, poll: n, compact: r } = this.props,
            { showSuppressModal: a, showRemoveAttachmentModal: s } = this.state,
            o = this.renderEditedTag(t, r),
            d = this.renderCodedLinks(t),
            c = this.renderGiftCodes(t),
            u = this.renderAttachments(t),
            _ = this.renderCtaButton(),
            m = this.renderEmbeds(t),
            h = this.renderActivityInvite(t),
            p = this.renderReactions(t),
            g = this.renderPublishBump(t),
            A = this.renderEphemeralAccessories(t),
            x = this.renderStickersAccessories(t),
            f = this.renderThreadAccessories(t),
            C = this.renderComponentAccessories(t),
            I = this.renderThreadRoleMentionWarning(t),
            E = this.renderEmbeddedApplicationInstanceEmbed(t),
            v = this.renderInteractionPremiumUpsell(t),
            b = this.renderMediaPostEmbeds(t),
            T = this.renderSafetyPolicyNotice(t),
            y = this.renderSafetySystemNotification(t),
            S = this.renderMediaObscureNotice(t),
            N = this.renderPoll(t, n),
            j = this.renderForwardedMessage(t),
            L = this.renderReportedMessage(t),
            R = this.renderShareClientTheme(t);
        return null == d &&
            null == u &&
            null == m &&
            null == h &&
            null == p &&
            null == c &&
            null == g &&
            null == A &&
            null == x &&
            null == f &&
            null == C &&
            null == E &&
            null == I &&
            null == b &&
            null == T &&
            null != v &&
            null == N &&
            null == j &&
            null == L &&
            null == R
            ? null
            : (0, i.jsxs)("div", {
                  id: (0, ek.XL)(t),
                  className: l()(e, eJ.kL),
                  children: [
                      L,
                      j,
                      I,
                      N,
                      R,
                      d,
                      c,
                      b,
                      u,
                      _,
                      m,
                      S,
                      h,
                      x,
                      C,
                      E,
                      v,
                      o,
                      p,
                      g,
                      A,
                      a && this.renderSuppressConfirmModal(),
                      s && this.renderRemoveAttachmentConfirmModal(),
                      f,
                      T,
                      y,
                  ],
              });
    }
}
function e7(e) {
    let { channel: t, message: n, renderSuppressEmbeds: r, isMessageSnapshot: a } = e,
        l = (0, d.bG)([ec.default], () => ec.default.getId()),
        s = eo.X6.useSetting(),
        c = eo.hD.useSetting(),
        u = eo.rs.useSetting() && !(0, ey.A)(e.message),
        _ = eo.jW.useSetting() && !1 !== e.renderReactions,
        m = eo.kt.useSetting(),
        h = (0, d.bG)([e_.A], () => null == t.guild_id || e_.A.canChatInGuild(t.guild_id), [t]),
        p = (0, d.bG)([F.A], () => null != t.guild_id && F.A.isLurking(t.guild_id), [t]),
        g = (0, d.bG)([eu.Ay, eh.default], () => {
            let e = eh.default.getCurrentUser();
            return (null != t.guild_id && null != e ? eu.Ay.getMember(t.guild_id, e.id)?.isPending : null) ?? !1;
        }),
        { canAddNewReactions: A, canManageMessages: x } = (0, d.cf)(
            [em.A],
            () => ({
                canAddNewReactions: h && em.A.can(eQ.xBc.ADD_REACTIONS, t),
                canManageMessages: em.A.can(eQ.xBc.MANAGE_MESSAGES, t),
            }),
            [h, t],
        ),
        f = (0, w.ix)(t.guild_id),
        [, C] = (0, M.c)(t.guild_id),
        I = (0, el.Id)(t),
        E =
            (l === n.author.id || x) &&
            n.author.id !== eQ.oIV &&
            !1 !== r &&
            !(0, o.Lt)(n.flags, eQ.pr7.EPHEMERAL) &&
            I &&
            (0, eT.A)(n) >= 1,
        v = l === n.author.id && I && !a,
        b = n.author.id === l,
        y = n.isFirstMessageInForumPost(t),
        N = (0, eS.A)({
            channel: t,
            canChat: h,
            renderReactions: _,
            canAddNewReactions: A,
            isLurking: p,
            communicationDisabled: C,
            isActiveChannelOrUnarchivableThread: I,
            isAutomodQuarantined: f,
        }),
        j = (0, H.S)((n.editedTimestamp ?? n.timestamp).valueOf()),
        L = (0, Y.A)(t?.id),
        R = (0, K.A)(n),
        P = (0, S.P)(n),
        D = (0, eb.z)(t),
        k = (0, eI._f)(n.id, n.channel_id),
        O = (0, T._R)();
    return (0, i.jsx)(e1, {
        canSuppressEmbeds: E,
        canDeleteAttachments: v,
        ...N,
        disableReactionReads: !!y || N.disableReactionReads,
        ...e,
        hasSpoilerEmbeds: e.hasSpoilerEmbeds && D,
        hasBailedAst: e.hasBailedAst,
        isLurking: p && h,
        isPendingMember: g && h,
        isCurrentUser: b,
        inlineAttachmentMedia: s,
        inlineEmbedMedia: c,
        renderEmbeds: u,
        gifAutoPlay: m,
        canRenderReferralEmbed: t.isDM(),
        poll: R,
        showListsAndHeaders: j,
        showMaskedLinks: j,
        shouldHideMediaOptions: L,
        enabledContentHarmTypeFlags: P,
        ctaButtonType: k,
        shouldAgeVerify: O,
    });
}
let e2 = (e) => {
    let {
            message: t,
            channel: n,
            disableReactionReads: r = !1,
            renderThreadAccessory: a = !1,
            disableReactionCreates: l = !0,
            disableReactionUpdates: s = !0,
            disableComponentInteractivity: o = !0,
            ...d
        } = e,
        c = eo.X6.useSetting(),
        u = eo.hD.useSetting(),
        _ = eo.rs.useSetting(),
        m = eo.kt.useSetting(),
        h = (0, H.S)((t.editedTimestamp ?? t.timestamp).valueOf()),
        p = (0, Y.A)(n?.id),
        g = (0, S.P)(t),
        A = (0, eI._f)(t.id, t.channel_id),
        x = (0, K.A)(t);
    return (0, i.jsx)(e1, {
        ...d,
        message: t,
        channel: n,
        disableReactionReads: r,
        disableReactionCreates: l,
        disableReactionUpdates: s,
        disableComponentInteractivity: o,
        canSuppressEmbeds: !1,
        canDeleteAttachments: !1,
        renderThreadAccessory: a,
        inlineAttachmentMedia: c,
        inlineEmbedMedia: u,
        renderEmbeds: _,
        gifAutoPlay: m,
        poll: x,
        showListsAndHeaders: h,
        showMaskedLinks: h,
        shouldHideMediaOptions: p,
        enabledContentHarmTypeFlags: g,
        ctaButtonType: A,
    });
};
