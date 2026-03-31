n.d(t, { Ay: () => e7, OC: () => e9, iV: () => e2 }), n(938796);
var i = n(627968),
    a = n(64700),
    r = n(503698),
    l = n.n(r),
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
    b = n(167189),
    v = n(175335),
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
    U = n(21599),
    B = n(178879),
    G = n(118331),
    F = n(520586),
    H = n(857071),
    V = n(384231),
    q = n(46054),
    W = n(731068),
    z = n(619517),
    Y = n(207133),
    Q = n(480191),
    K = n(269849),
    J = n(704413),
    X = n(695206),
    Z = n(892742),
    $ = n(376708),
    ee = n(549527),
    et = n(302031),
    en = n(899894),
    ei = n(581034),
    ea = n(50777),
    er = n(378058),
    el = n(443642),
    es = n(406704),
    eo = n(996522),
    ed = n(253932),
    ec = n(383233),
    eu = n(961350),
    e_ = n(696451),
    em = n(834942),
    eh = n(576705),
    ep = n(287809),
    eg = n(644447),
    eA = n(954571),
    ex = n(927813),
    ef = n(659674),
    eC = n(661191),
    eI = n(998218),
    eE = n(988012),
    eb = n(294520),
    ev = n(141468),
    eT = n(863439),
    ey = n(869938),
    eS = n(143413),
    eN = n(707985),
    ej = n(443228),
    eL = n(875033),
    eR = n(341645),
    eP = n(986350),
    ew = n(439401),
    eM = n(466802),
    eD = n(990560),
    ek = n(266620),
    eO = n(860227),
    eU = n(564107),
    eB = n(763899),
    eG = n(652176),
    eF = n(382807),
    eH = n(394839),
    eV = n(96782),
    eq = n(573163),
    eW = n(861986),
    ez = n(937266),
    eY = n(343552),
    eQ = n(581619),
    eK = n(652215),
    eJ = n(985018),
    eX = n(936796);
let eZ = [eK.Auw.GIFV],
    e$ = 15 * ex.A.Millis.MINUTE,
    e0 = new Set(["discord-developers", "discord-testers", "discord-townhall", "discordgameslab"]),
    e1 = (e) => () => {
        let { url: t, proxyUrl: n, width: a, height: r, flags: l } = e,
            s = (0, o.Lt)(l, W.e5.IS_ANIMATED);
        return null != a && null != r && (z.bp.test(n) || (s && (z.P8.test(n) || z.p4.test(n))))
            ? (0, i.jsx)(ew.A, { width: a, height: r, src: n, url: t, format: c.TL.IMAGE, className: eX.jj })
            : null;
    };
class e2 extends a.Component {
    static defaultProps = { renderEmbeds: !0, compact: !1 };
    state = { showSuppressModal: !1, showRemoveAttachmentModal: !1, attachmentToDelete: null };
    getAcceptInviteContext = (e, t) => {
        let { channel: n, message: i } = this.props;
        return {
            location: e,
            location_guild_id: n.getGuildId(),
            location_channel_id: n.id,
            location_channel_type: n.type,
            location_message_id: i.id,
            ...(null != t ? { invite_instance_id: (0, U._U)(t, i.id) } : {}),
        };
    };
    shouldRenderInvite(e) {
        let { channel: t } = this.props;
        return !(t.isDM() && !t.isSystemDM() && !t.isGroupDM() && e0.has(e));
    }
    shouldComponentUpdate(e, t) {
        var n, i;
        let { channel: a, message: r, poll: l } = this.props,
            { channel: s, message: o, poll: d } = e;
        return (
            !(0, u.A)(this.state, t) ||
            !(0, u.A)(this.props, e, ["message", "channel"]) ||
            a.type !== s.type ||
            d !== l ||
            o.codedLinks !== r.codedLinks ||
            o.flags !== r.flags ||
            o.giftCodes !== r.giftCodes ||
            o.attachments !== r.attachments ||
            o.embeds !== r.embeds ||
            o.components !== r.components ||
            o.activity !== r.activity ||
            ((n = o.reactions) !== (i = r.reactions) &&
                (n.length !== i.length ||
                    !!n.some((e, t) => {
                        let { emoji: n, count: a, burst_count: r } = e,
                            { emoji: l, count: s, burst_count: o } = i[t];
                        return r !== o || a !== s || n.id !== l.id || n.name !== l.name;
                    })))
        );
    }
    renderCtaButton() {
        let { message: e, channel: t, ctaButtonType: n } = this.props,
            a = null;
        switch (n) {
            case eE.xC.MARK_AS_FALSE_POSITIVE:
                a = (0, i.jsx)(j.A, { messageId: e.id, channelId: t.id });
                break;
            case eE.xC.AGE_VERIFICATION_RETRY:
                a = (0, i.jsx)(p.A, { channelId: t.id });
                break;
            default:
                return null;
        }
        return (0, i.jsx)("div", { className: eX.od, children: a });
    }
    renderCodedLinks(e) {
        return 0 === e.codedLinks.length
            ? null
            : e.codedLinks.map((t) => {
                  let { type: n, code: a, url: r } = t;
                  if (n === b.I.INVITE)
                      return this.shouldRenderInvite(a)
                          ? (0, i.jsx)(
                                eD.A,
                                { code: a, message: e, getAcceptInviteContext: this.getAcceptInviteContext },
                                a,
                            )
                          : null;
                  if (n === b.I.TEMPLATE) return (0, i.jsx)(O.A, { code: a }, a);
                  if (n === b.I.EVENT) return (0, i.jsx)(k.A, { code: a }, a);
                  if (n === b.I.CHANNEL_LINK) return (0, i.jsx)(ej.A, { code: a, message: e }, a);
                  if (n === b.I.APP_DIRECTORY_PROFILE) return (0, i.jsx)(P.A, { code: a, message: e }, a);
                  else if (n === b.I.ACTIVITY_BOOKMARK) {
                      let { referrerId: t = e.author.id, customId: n, linkId: l } = (0, x.N)(r);
                      return (0, i.jsx)(
                          h.A,
                          { applicationId: a, message: e, referrerId: t, customId: n, linkId: l },
                          a,
                      );
                  } else if (n === b.I.GUILD_PRODUCT) return (0, i.jsx)(D.A, { code: a }, a);
                  else if (n === b.I.SERVER_SHOP) return (0, i.jsx)(v.A, { guildId: a }, a);
                  else if (n === b.I.SOCIAL_LAYER_STOREFRONT) {
                      let [e, t] = a.split("-"),
                          { channel: n } = this.props;
                      return (0, i.jsx)(ea.A, { guildId: t, skuId: e, channel: n }, a);
                  } else if (n === b.I.QUESTS_EMBED) return (0, i.jsx)(Z.A, { questId: a }, a);
                  else if (n === b.I.APP_DIRECTORY_STOREFRONT) return (0, i.jsx)(A.G, { appId: a, message: e }, a);
                  else if (n === b.I.APP_DIRECTORY_STOREFRONT_SKU) {
                      let t = (0, g.u)(a);
                      return null == t
                          ? null
                          : (0, i.jsx)(A.$, { appId: t.applicationId, skuId: t.skuId, message: e }, a);
                  } else if (n === b.I.APP_OAUTH2_LINK) return (0, i.jsx)(f.A, { applicationId: a, message: e }, a);
                  else if (n === b.I.COLLECTIBLES_SHOP) return null;
                  else if (n === b.I.EXPERIMENT) return null;
                  else throw Error(`Unknown coded link type: ${n}`);
              });
    }
    renderGiftCodes(e) {
        let { giftCodes: t, author: n, channel_id: a, type: r, content: l, giftInfo: s } = e,
            o = ep.default.getCurrentUser();
        return null != o && t.length > 0
            ? t.map((e) =>
                  (0, i.jsx)(
                      "div",
                      {
                          className: eX.zv,
                          children: (0, i.jsx)(eM.A, {
                              code: e,
                              author: n,
                              channelId: a,
                              currentUser: o,
                              type: r,
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
            disableReactionUpdates: a,
            isLurking: r,
            isPendingMember: l,
            channel: s,
            forceAddReactions: o,
        } = this.props;
        return n
            ? null
            : (0, i.jsx)(eq.A, {
                  message: e,
                  channel: s,
                  disableReactionCreates: t,
                  disableReactionUpdates: a,
                  isLurking: r,
                  isPendingMember: l,
                  forceAddReactions: o,
                  useChatFontScaling: !0,
              });
    }
    renderAttachments(e) {
        let {
                channel: t,
                gifAutoPlay: n,
                canDeleteAttachments: a,
                inlineAttachmentMedia: r,
                onMediaItemContextMenu: l,
                enabledContentHarmTypeFlags: s,
                shouldHideMediaOptions: d,
            } = this.props,
            { attachments: c, flags: u } = e;
        if (0 === c.length || e.isPoll() || (0, ec._c)(e)) return null;
        let _ = c.filter((e) => null == e.flags || !(0, o.Lt)(e.flags, eK.sbO.IS_THUMBNAIL));
        if (0 === _.length) return null;
        let m = _.map((t) => ({
                ...(0, W.Rr)(t, e),
                original: t.url,
                srcIsAnimated: (0, o.Lt)(t.flags ?? 0, eK.sbO.IS_ANIMATED),
            })).filter((e) => "INVALID" !== e.type),
            { srcToOnClickOverride: h, srcToHandlePreloadImage: p } = (0, K.o)(
                m,
                { enabledContentHarmTypeFlags: s, shouldHideMediaOptions: d },
                "Media Mosaic",
            ),
            g = m.length > 1,
            A = (0, o.Lt)(u, eK.pr7.IS_VOICE_MESSAGE);
        function x(e, t) {
            return (0, eb.iW)(e.originalItem, t);
        }
        let f = _.map((i) => {
            let s = (0, W.aG)(i),
                o = {
                    message: e,
                    item: (0, eV.rC)(i, r),
                    autoPlayGif: n,
                    canRemoveItem: a && (_.length > 1 || "" !== e.content),
                    onRemoveItem: this.handleRemoveAttachment,
                    getObscureReason: x,
                    onContextMenu:
                        null != l
                            ? (e) => {
                                  e.stopPropagation(), e.preventDefault(), l(e, s);
                              }
                            : void 0,
                    renderAudioComponent: A ? ek.SX : ek.Nj,
                    renderImageComponent: ek.Cr,
                    renderVideoComponent: ek.I1,
                    renderPlaintextFilePreview: ek.R6,
                    renderGenericFileComponent: ek.UB,
                    renderMosaicItemFooter: ek.YE,
                    onPlay: (e, n, a) => {
                        eA.default.track(eK.HAw.MEDIA_ATTACHMENT_PLAYBACK_STARTED, {
                            guild_id: t.guild_id,
                            channel_id: t.id,
                            channel_type: t.type,
                            type: i.content_type,
                            flags: i.flags,
                            size: i.size,
                            duration: a,
                        });
                    },
                    gifFavoriteButton: e1(s),
                },
                d = (0, eg.E)({ proxyURL: i.proxy_url, url: i.url });
            return d in h && g && ((o.onClick = h[d]), (o.handlePreloadImage = p[d])), o;
        });
        return (0, i.jsx)(eH.A, { items: f });
    }
    renderEmbed = (e, t, n, a) => {
        let {
                gifAutoPlay: r,
                inlineEmbedMedia: l,
                canSuppressEmbeds: s,
                hasSpoilerEmbeds: o,
                enabledContentHarmTypeFlags: d,
                shouldAgeVerify: c,
            } = this.props,
            u = (0, eb.sC)(e, a, o, d);
        if (e.type === eK.Auw.GIFT) return null;
        let _ = eZ.includes(e.type) ? e.url : (e.image?.url ?? e.video?.url);
        return (0, i.jsx)(
            R.G.Provider,
            {
                value: (0, eY.b)(_, e.image, e.video, e.thumbnail, e.provider?.name),
                children: (0, i.jsx)(I.Ay, {
                    embed: e,
                    obscureReason: u ?? void 0,
                    autoPlayGif: r,
                    hideMedia: !l,
                    allowFullScreen: !this.props.disableComponentInteractivity,
                    onSuppressEmbed: s ? this.handleEmbedSuppressed : void 0,
                    renderTitle: this.renderEmbedTitle,
                    renderDescription: this.renderEmbedDescription,
                    message: a,
                    embedIndex: t,
                    shouldAgeVerify: c ?? !1,
                    ...n,
                }),
            },
            e.id,
        );
    };
    renderEmbedTitle = (e, t) =>
        e.type !== eK.Auw.RICH
            ? t
            : (null != e.url && "" !== e.url ? q.A.parseEmbedTitleWithoutLinks : q.A.parseEmbedTitle)(t, !0, {
                  channelId: this.props.channel.id,
              });
    renderEmbedDescription = (e, t, n) =>
        e.type === eK.Auw.RICH
            ? q.A.parse(t, !0, {
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
                      eQ.z.has(t.type) ||
                      (0, ef.p6)(t) ||
                      ((0, B.f)(t) && !(0, G.d)(e)) ||
                      (0, ef.V)(t) ||
                      (0, ef.G8)(t)
                  )
                      return null;
                  if (t.type === eK.Auw.COMPONENTS && null != t.components && t.components.length > 0) {
                      var a = this;
                      let {
                              gifAutoPlay: n,
                              enabledContentHarmTypeFlags: r,
                              shouldHideMediaOptions: l,
                              onMediaItemContextMenu: s,
                              canSuppressEmbeds: o,
                              hasSpoilerEmbeds: d,
                          } = this.props,
                          c = (0, eb.sC)(t, e, d, r),
                          u = function () {
                              let d = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                              return (0, i.jsx)(
                                  eL.A,
                                  {
                                      components: t.components ?? [],
                                      message: e,
                                      gifAutoPlay: n,
                                      getGifFavButton: e1,
                                      getOnMediaItemContextMenu:
                                          null == s
                                              ? void 0
                                              : (e) => (t) => {
                                                    t.stopPropagation(), t.preventDefault(), s?.(t, e);
                                                },
                                      shouldHideMediaOptions: l,
                                      enabledContentHarmTypeFlags: r,
                                      onSuppressEmbed: o ? a.handleEmbedSuppressed : void 0,
                                      hiddenSpoiler: d,
                                  },
                                  t.id,
                              );
                          };
                      return null != c
                          ? (0, i.jsx)(
                                et.Ay,
                                {
                                    type: et.Ay.Types.EMBED,
                                    reason: c,
                                    isSingleMosaicItem: !0,
                                    containerStyles: { width: "fit-content" },
                                    children: (e) => u(e),
                                },
                                t.id,
                            )
                          : u();
                  }
                  let r = { renderImageComponent: eG.LL, renderVideoComponent: eG.$o, renderLinkComponent: eG.bU };
                  if (
                      t.type === eK.Auw.ARTICLE &&
                      null != t.url &&
                      /^https?:\/\/(?:canary|ptb|www)?\.discord(?:app)?\.com\/store\/skus\/(?:[0-9]+)/.test(t.url) &&
                      null != t.provider &&
                      "Discord" === t.provider.name
                  ) {
                      let a = eI.A.safeParseWithQuery(t.url);
                      if (null != a && null != a.pathname) {
                          let l = a.pathname.split("/")[3];
                          if (null != l)
                              return (0, i.jsx)(
                                  ez.A,
                                  { skuId: l, renderFallback: () => this.renderEmbed(t, n, r, e) },
                                  t.id,
                              );
                      }
                  }
                  return this.renderEmbed(t, n, r, e);
              });
    }
    renderComponentAccessories(e) {
        if (0 === e.components.length) return null;
        let {
            gifAutoPlay: t,
            enabledContentHarmTypeFlags: n,
            shouldHideMediaOptions: a,
            disableComponentInteractivity: r,
            onMediaItemContextMenu: l,
        } = this.props;
        return (0, i.jsx)(eU.N, {
            gifAutoPlay: t,
            getGifFavButton: e1,
            getOnMediaItemContextMenu:
                null == l
                    ? void 0
                    : (e) => (t) => {
                          t.stopPropagation(), t.preventDefault(), l?.(t, e);
                      },
            shouldHideMediaOptions: a,
            enabledContentHarmTypeFlags: n,
            children: (0, i.jsx)(F.Ay, { message: e, shouldDisableInteractiveComponents: r }),
        });
    }
    renderActivityInvite(e) {
        if (null == e.activity) return null;
        let { channel: t } = this.props;
        return (0, i.jsx)(eB.A, { channel: t, message: e, hideParty: !1 });
    }
    renderPublishBump(e) {
        return this.props.channel.type !== eK.rbe.GUILD_ANNOUNCEMENT || this.props.isMessageSnapshot
            ? null
            : (0, i.jsx)(C.A, { channelId: e.channel_id, messageId: e.id });
    }
    renderEphemeralAccessories(e) {
        return (0, ev.ec)(e)
            ? (0, i.jsx)(eP.A, {
                  message: e,
                  onDeleteMessage: () => {
                      m.A.dismissAutomatedMessage(e);
                  },
              })
            : null;
    }
    renderStickersAccessories(e) {
        let t = (0, er.o6)(e),
            { channel: n, isInteracting: a } = this.props;
        return 0 === t.length
            ? null
            : t.map((e) => (0, i.jsx)(el.A, { channel: n, isInteracting: a, renderableSticker: e }, e.id));
    }
    renderThreadAccessories(e) {
        if (e.hasFlag(eK.pr7.HAS_THREAD) && !1 !== this.props.renderThreadAccessory)
            return (0, i.jsx)(eo.A, { message: e, compact: this.props.compact });
    }
    renderThreadRoleMentionWarning(e) {
        if (
            e.hasFlag(eK.pr7.FAILED_TO_MENTION_SOME_ROLES_IN_THREAD) &&
            this.props.isCurrentUser &&
            !(Date.now() - eC.default.extractTimestamp(e.id) >= e$)
        )
            return (0, i.jsx)("div", { className: eX.xM, children: eJ.intl.string(eJ.t.ma8Rs0) });
    }
    renderSuppressConfirmModal() {
        let { channel: e, message: t } = this.props;
        return (0, i.jsxs)(_.MJ3, {
            dismissable: !0,
            header: eJ.intl.string(eJ.t.VL1KOk),
            confirmText: eJ.intl.string(eJ.t.YEHppG),
            cancelText: eJ.intl.string(eJ.t["ETE/oC"]),
            onCancel: () => this.setState({ showSuppressModal: !1 }),
            onConfirm: () => {
                m.A.suppressEmbeds(e.id, t.id), this.setState({ showSuppressModal: !1 });
            },
            children: [
                (0, i.jsx)(_.Text, {
                    variant: "text-md/normal",
                    color: "text-default",
                    className: eX.IX,
                    children: eJ.intl.string(eJ.t["vXZ+Fo"]),
                }),
                (0, i.jsx)(_.Text, {
                    variant: "text-md/normal",
                    color: "text-muted",
                    children: eJ.intl.string(eJ.t["5j2by3"]),
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
                  header: eJ.intl.string(eJ.t.CbTIEo),
                  confirmText: eJ.intl.string(eJ.t.kFwAsa),
                  cancelText: eJ.intl.string(eJ.t["ETE/oC"]),
                  onCancel: () => this.setState({ showRemoveAttachmentModal: !1, attachmentToDelete: null }),
                  onConfirm: () => {
                      let i = t.attachments.filter((e) => e.id !== n.id);
                      m.A.patchMessageAttachments(e.id, t.id, i),
                          this.setState({ showRemoveAttachmentModal: !1, attachmentToDelete: null });
                  },
                  children: (0, i.jsx)(_.Text, {
                      variant: "text-md/normal",
                      color: "text-default",
                      className: eX.IX,
                      children: eJ.intl.string(eJ.t.faHmO3),
                  }),
              });
    }
    renderInteractionPremiumUpsell(e) {
        let t = e.applicationId;
        return e.type !== s.l.INTERACTION_PREMIUM_UPSELL || null == t
            ? null
            : (0, i.jsx)(eF.A, { applicationId: t, guildId: this.props.channel.guild_id });
    }
    renderEmbeddedApplicationInstanceEmbed(e) {
        let { application: t, activityInstance: n } = e;
        return null == t || null == n
            ? null
            : (0, i.jsx)(eR.A, {
                  application: t,
                  channelId: this.props.channel.id,
                  guildId: this.props.channel.guild_id,
                  message: e,
              });
    }
    renderMediaPostEmbeds(e) {
        return e.embeds.flatMap((t) =>
            t.type !== eK.Auw.POST_PREVIEW || null == t.url
                ? []
                : (0, i.jsx)(Q.A, { embedUrl: t.url, message: e, channel: this.props.channel }, t.id),
        );
    }
    renderSafetyPolicyNotice(e) {
        return 1 === e.embeds.length && e.embeds[0].type === eK.Auw.SAFETY_POLICY_NOTICE
            ? (0, i.jsx)(en.V, { message: e })
            : null;
    }
    renderSafetySystemNotification(e) {
        return 1 === e.embeds.length && e.embeds[0].type === eK.Auw.SAFETY_SYSTEM_NOTIFICATION
            ? (0, i.jsx)(ei.l, { embed: e.embeds[0] })
            : null;
    }
    renderMediaObscureNotice(e) {
        return (0 !== e.attachments.length || 0 !== e.embeds.length) && (0, y.KM)(e)
            ? (0, i.jsx)(N.A, { message: e })
            : null;
    }
    renderPoll(e, t) {
        if (null != t) return (0, i.jsx)(X.A, { message: e, poll: t, className: eX.PM });
    }
    renderShareClientTheme(e) {
        return null != e.sharedClientTheme ? (0, i.jsx)(E.f, { message: e }) : null;
    }
    renderReportedMessage(e) {
        if (e.messageSnapshots.length > 0 && (0, $.Mn)(e, this.props.channel)) return (0, i.jsx)(ee.A, { message: e });
    }
    renderForwardedMessage(e) {
        if (e.messageSnapshots.length > 0 && !(0, $.Mn)(e, this.props.channel)) return (0, i.jsx)(L.A, { message: e });
    }
    renderEditedTag(e, t) {
        return (0, i.jsx)(eW.A, { message: e, compact: t, location: eW.O.AFTER_ACCESSORIES });
    }
    render() {
        let { className: e, message: t, poll: n, compact: a } = this.props,
            { showSuppressModal: r, showRemoveAttachmentModal: s } = this.state,
            o = this.renderEditedTag(t, a),
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
            b = this.renderInteractionPremiumUpsell(t),
            v = this.renderMediaPostEmbeds(t),
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
            null == v &&
            null == T &&
            null != b &&
            null == N &&
            null == j &&
            null == L &&
            null == R
            ? null
            : (0, i.jsxs)("div", {
                  id: (0, eO.XL)(t),
                  className: l()(e, eX.kL),
                  children: [
                      L,
                      j,
                      I,
                      N,
                      R,
                      d,
                      c,
                      v,
                      u,
                      _,
                      m,
                      S,
                      h,
                      x,
                      C,
                      E,
                      b,
                      o,
                      p,
                      g,
                      A,
                      r && this.renderSuppressConfirmModal(),
                      s && this.renderRemoveAttachmentConfirmModal(),
                      f,
                      T,
                      y,
                  ],
              });
    }
}
function e7(e) {
    let { channel: t, message: n, renderSuppressEmbeds: a, isMessageSnapshot: r } = e,
        l = (0, d.bG)([eu.default], () => eu.default.getId()),
        s = ed.X6.useSetting(),
        c = ed.hD.useSetting(),
        u = ed.rs.useSetting() && !(0, eS.A)(e.message),
        _ = ed.jW.useSetting() && !1 !== e.renderReactions,
        m = ed.kt.useSetting(),
        h = (0, d.bG)([em.A], () => null == t.guild_id || em.A.canChatInGuild(t.guild_id), [t]),
        p = (0, d.bG)([H.A], () => null != t.guild_id && H.A.isLurking(t.guild_id), [t]),
        g = (0, d.bG)([e_.Ay, ep.default], () => {
            let e = ep.default.getCurrentUser();
            return (null != t.guild_id && null != e ? e_.Ay.getMember(t.guild_id, e.id)?.isPending : null) ?? !1;
        }),
        { canAddNewReactions: A, canManageMessages: x } = (0, d.cf)(
            [eh.A],
            () => ({
                canAddNewReactions: h && eh.A.can(eK.xBc.ADD_REACTIONS, t),
                canManageMessages: eh.A.can(eK.xBc.MANAGE_MESSAGES, t),
            }),
            [h, t],
        ),
        f = (0, w.ix)(t.guild_id),
        [, C] = (0, M.c)(t.guild_id),
        I = (0, es.Id)(t),
        E =
            (l === n.author.id || x) &&
            n.author.id !== eK.oIV &&
            !1 !== a &&
            !(0, o.Lt)(n.flags, eK.pr7.EPHEMERAL) &&
            I &&
            (0, ey.A)(n) >= 1,
        b = l === n.author.id && I && !r,
        v = n.author.id === l,
        y = n.isFirstMessageInForumPost(t),
        N = (0, eN.A)({
            channel: t,
            canChat: h,
            renderReactions: _,
            canAddNewReactions: A,
            isLurking: p,
            communicationDisabled: C,
            isActiveChannelOrUnarchivableThread: I,
            isAutomodQuarantined: f,
        }),
        j = (0, V.S)((n.editedTimestamp ?? n.timestamp).valueOf()),
        L = (0, Y.A)(t?.id),
        R = (0, J.A)(n),
        P = (0, S.P)(n),
        D = (0, eT.z)(t),
        k = (0, eE._f)(n.id, n.channel_id),
        O = (0, T._R)();
    return (0, i.jsx)(e2, {
        canSuppressEmbeds: E,
        canDeleteAttachments: b,
        ...N,
        disableReactionReads: !!y || N.disableReactionReads,
        ...e,
        hasSpoilerEmbeds: e.hasSpoilerEmbeds && D,
        hasBailedAst: e.hasBailedAst,
        isLurking: p && h,
        isPendingMember: g && h,
        isCurrentUser: v,
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
let e9 = (e) => {
    let {
            message: t,
            channel: n,
            disableReactionReads: a = !1,
            renderThreadAccessory: r = !1,
            disableReactionCreates: l = !0,
            disableReactionUpdates: s = !0,
            disableComponentInteractivity: o = !0,
            ...d
        } = e,
        c = ed.X6.useSetting(),
        u = ed.hD.useSetting(),
        _ = ed.rs.useSetting(),
        m = ed.kt.useSetting(),
        h = (0, V.S)((t.editedTimestamp ?? t.timestamp).valueOf()),
        p = (0, Y.A)(n?.id),
        g = (0, S.P)(t),
        A = (0, eE._f)(t.id, t.channel_id),
        x = (0, J.A)(t);
    return (0, i.jsx)(e2, {
        ...d,
        message: t,
        channel: n,
        disableReactionReads: a,
        disableReactionCreates: l,
        disableReactionUpdates: s,
        disableComponentInteractivity: o,
        canSuppressEmbeds: !1,
        canDeleteAttachments: !1,
        renderThreadAccessory: r,
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
