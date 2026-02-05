n.d(t, { Ay: () => e0, OC: () => e1, iV: () => e$ }), n(938796);
var i = n(627968),
    l = n(64700),
    a = n(503698),
    r = n.n(a),
    s = n(448761),
    o = n(665260),
    d = n(311907),
    c = n(803805),
    u = n(52133),
    m = n(397927),
    _ = n(843472),
    h = n(475073),
    p = n(295843),
    g = n(488331),
    A = n(298481),
    f = n(121401),
    x = n(509282),
    E = n(909338),
    C = n(948729),
    I = n(150099),
    T = n(871751),
    v = n(510790),
    N = n(167189),
    S = n(175335),
    b = n(390248),
    y = n(282108),
    j = n(33358),
    R = n(704400),
    L = n(496376),
    M = n(795982),
    O = n(643612),
    P = n(613760),
    D = n(229527),
    k = n(870136),
    U = n(33525),
    w = n(484724),
    G = n(71755),
    B = n(178879),
    F = n(118331),
    H = n(520586),
    V = n(857071),
    z = n(384231),
    W = n(46054),
    Y = n(731068),
    q = n(619517),
    K = n(207133),
    Q = n(480191),
    J = n(269849),
    X = n(704413),
    Z = n(695206),
    $ = n(892742),
    ee = n(376708),
    et = n(549527),
    en = n(899894),
    ei = n(581034),
    el = n(50777),
    ea = n(378058),
    er = n(443642),
    es = n(406704),
    eo = n(996522),
    ed = n(253932),
    ec = n(383233),
    eu = n(961350),
    em = n(696451),
    e_ = n(834942),
    eh = n(576705),
    ep = n(287809),
    eg = n(644447),
    eA = n(954571),
    ef = n(927813),
    ex = n(659674),
    eE = n(661191),
    eC = n(998218),
    eI = n(988012),
    eT = n(294520),
    ev = n(141468),
    eN = n(863439),
    eS = n(869938),
    eb = n(143413),
    ey = n(707985),
    ej = n(443228),
    eR = n(341645),
    eL = n(986350),
    eM = n(439401),
    eO = n(990560),
    eP = n(266620),
    eD = n(860227),
    ek = n(564107),
    eU = n(763899),
    ew = n(652176),
    eG = n(382807),
    eB = n(394839),
    eF = n(96782),
    eH = n(573163),
    eV = n(861986),
    ez = n(343552),
    eW = n(581619),
    eY = n(652215),
    eq = n(985018),
    eK = n(867525);
let eQ = [eY.Auw.GIFV],
    eJ = 15 * ef.A.Millis.MINUTE,
    eX = new Set(["discord-developers", "discord-testers", "discord-townhall", "discordgameslab"]),
    eZ = (e) => () => {
        let { url: t, proxyUrl: n, width: l, height: a, flags: r } = e,
            s = (0, o.Lt)(r, Y.e5.IS_ANIMATED);
        return null != l && null != a && (q.bp.test(n) || (s && (q.P8.test(n) || q.p4.test(n))))
            ? (0, i.jsx)(eM.A, { width: l, height: a, src: n, url: t, format: c.TL.IMAGE, className: eK.jj })
            : null;
    };
class e$ extends l.Component {
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
        return !(t.isDM() && !t.isSystemDM() && !t.isGroupDM() && eX.has(e));
    }
    shouldComponentUpdate(e, t) {
        var n, i;
        let { channel: l, message: a, poll: r } = this.props,
            { channel: s, message: o, poll: d } = e;
        return (
            !(0, u.A)(this.state, t) ||
            !(0, u.A)(this.props, e, ["message", "channel"]) ||
            l.type !== s.type ||
            d !== r ||
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
                        let { emoji: n, count: l, burst_count: a } = e,
                            { emoji: r, count: s, burst_count: o } = i[t];
                        return a !== o || l !== s || n.id !== r.id || n.name !== r.name;
                    })))
        );
    }
    renderCtaButton() {
        let { message: e, channel: t, ctaButtonType: n } = this.props,
            l = null;
        switch (n) {
            case eI.xC.MARK_AS_FALSE_POSITIVE:
                l = (0, i.jsx)(L.A, { messageId: e.id, channelId: t.id });
                break;
            case eI.xC.AGE_VERIFICATION_RETRY:
                l = (0, i.jsx)(A.A, { channelId: t.id });
                break;
            default:
                return null;
        }
        return (0, i.jsx)("div", { className: eK.od, children: l });
    }
    renderCodedLinks(e) {
        return 0 === e.codedLinks.length
            ? null
            : e.codedLinks.map((t) => {
                  let { type: n, code: l, url: a } = t;
                  if (n === N.I.INVITE)
                      return this.shouldRenderInvite(l)
                          ? (0, i.jsx)(
                                eO.A,
                                { code: l, message: e, getAcceptInviteContext: this.getAcceptInviteContext },
                                l,
                            )
                          : null;
                  if (n === N.I.TEMPLATE) return (0, i.jsx)(G.A, { code: l }, l);
                  if (n === N.I.EVENT) return (0, i.jsx)(w.A, { code: l }, l);
                  if (n === N.I.CHANNEL_LINK) return (0, i.jsx)(ej.A, { code: l, message: e }, l);
                  if (n === N.I.APP_DIRECTORY_PROFILE) return (0, i.jsx)(P.A, { code: l, message: e }, l);
                  else if (n === N.I.ACTIVITY_BOOKMARK) {
                      let { referrerId: t = e.author.id, customId: n, linkId: r } = (0, E.N)(a);
                      return (0, i.jsx)(
                          g.A,
                          { applicationId: l, message: e, referrerId: t, customId: n, linkId: r },
                          l,
                      );
                  } else if (n === N.I.GUILD_PRODUCT) return (0, i.jsx)(U.A, { code: l }, l);
                  else if (n === N.I.SERVER_SHOP) return (0, i.jsx)(S.A, { guildId: l }, l);
                  else if (n === N.I.SOCIAL_LAYER_STOREFRONT) {
                      let [e, t] = l.split("-"),
                          { channel: n } = this.props;
                      return (0, i.jsx)(el.A, { guildId: t, skuId: e, channel: n }, l);
                  } else if (n === N.I.QUESTS_EMBED) return (0, i.jsx)($.A, { questId: l }, l);
                  else if (n === N.I.APP_DIRECTORY_STOREFRONT) return (0, i.jsx)(x.G, { appId: l, message: e }, l);
                  else if (n === N.I.APP_DIRECTORY_STOREFRONT_SKU) {
                      let t = (0, f.u)(l);
                      return null == t
                          ? null
                          : (0, i.jsx)(x.$, { appId: t.applicationId, skuId: t.skuId, message: e }, l);
                  } else if (n === N.I.APP_OAUTH2_LINK) return (0, i.jsx)(C.A, { applicationId: l, message: e }, l);
                  else if (n === N.I.COLLECTIBLES_SHOP) return null;
                  else if (n === N.I.EXPERIMENT) return null;
                  else throw Error(`Unknown coded link type: ${n}`);
              });
    }
    renderGiftCodes(e) {
        let { giftCodes: t, author: n, channel_id: l, type: a, content: r, giftInfo: s } = e,
            o = ep.default.getCurrentUser();
        return null != o && t.length > 0
            ? t.map((e) =>
                  (0, i.jsx)(
                      "div",
                      {
                          className: eK.zv,
                          children: (0, i.jsx)(h.A, {
                              code: e,
                              author: n,
                              channelId: l,
                              currentUser: o,
                              type: a,
                              content: r,
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
            disableReactionUpdates: l,
            isLurking: a,
            isPendingMember: r,
            channel: s,
            forceAddReactions: o,
        } = this.props;
        return n
            ? null
            : (0, i.jsx)(eH.A, {
                  message: e,
                  channel: s,
                  disableReactionCreates: t,
                  disableReactionUpdates: l,
                  isLurking: a,
                  isPendingMember: r,
                  forceAddReactions: o,
                  useChatFontScaling: !0,
              });
    }
    renderAttachments(e) {
        let {
                channel: t,
                gifAutoPlay: n,
                canDeleteAttachments: l,
                inlineAttachmentMedia: a,
                onMediaItemContextMenu: r,
                enabledContentHarmTypeFlags: s,
                shouldHideMediaOptions: d,
            } = this.props,
            { attachments: c, flags: u } = e;
        if (0 === c.length || e.isPoll() || (0, ec._c)(e)) return null;
        let m = c.filter((e) => null == e.flags || !(0, o.Lt)(e.flags, eY.sbO.IS_THUMBNAIL));
        if (0 === m.length) return null;
        let _ = m
                .map((t) => ({
                    ...(0, Y.Rr)(t, e),
                    original: t.url,
                    srcIsAnimated: (0, o.Lt)(t.flags ?? 0, eY.sbO.IS_ANIMATED),
                }))
                .filter((e) => "INVALID" !== e.type),
            { srcToOnClickOverride: h, srcToHandlePreloadImage: p } = (0, J.o)(
                _,
                { enabledContentHarmTypeFlags: s, shouldHideMediaOptions: d },
                "Media Mosaic",
            ),
            g = _.length > 1,
            A = (0, o.Lt)(u, eY.pr7.IS_VOICE_MESSAGE);
        function f(e, t) {
            return (0, eT.iW)(e.originalItem, t);
        }
        let x = m.map((i) => {
            let s = (0, Y.aG)(i),
                o = {
                    message: e,
                    item: (0, eF.rC)(i, a),
                    autoPlayGif: n,
                    canRemoveItem: l && (m.length > 1 || "" !== e.content),
                    onRemoveItem: this.handleRemoveAttachment,
                    getObscureReason: f,
                    onContextMenu:
                        null != r
                            ? (e) => {
                                  e.stopPropagation(), e.preventDefault(), r(e, s);
                              }
                            : void 0,
                    renderAudioComponent: A ? eP.SX : eP.Nj,
                    renderImageComponent: eP.Cr,
                    renderVideoComponent: eP.I1,
                    renderPlaintextFilePreview: eP.R6,
                    renderGenericFileComponent: eP.UB,
                    renderMosaicItemFooter: eP.YE,
                    onPlay: (e, n, l) => {
                        eA.default.track(eY.HAw.MEDIA_ATTACHMENT_PLAYBACK_STARTED, {
                            guild_id: t.guild_id,
                            channel_id: t.id,
                            channel_type: t.type,
                            type: i.content_type,
                            flags: i.flags,
                            size: i.size,
                            duration: l,
                        });
                    },
                    gifFavoriteButton: eZ(s),
                },
                d = (0, eg.E)({ proxyURL: i.proxy_url, url: i.url });
            return d in h && g && ((o.onClick = h[d]), (o.handlePreloadImage = p[d])), o;
        });
        return (0, i.jsx)(eB.A, { items: x });
    }
    renderEmbed = (e, t, n, l) => {
        let {
                gifAutoPlay: a,
                inlineEmbedMedia: r,
                canSuppressEmbeds: s,
                hasSpoilerEmbeds: o,
                enabledContentHarmTypeFlags: d,
                shouldAgeVerify: c,
            } = this.props,
            u = (0, eT.sC)(e, l, o, d);
        if (e.type === eY.Auw.GIFT) return null;
        let m = eQ.includes(e.type) ? e.url : (e.image?.url ?? e.video?.url);
        return (0, i.jsx)(
            O.G.Provider,
            {
                value: (0, ez.b)(m, e.image, e.video, e.thumbnail, e.provider?.name),
                children: (0, i.jsx)(T.Ay, {
                    embed: e,
                    obscureReason: u ?? void 0,
                    autoPlayGif: a,
                    hideMedia: !r,
                    allowFullScreen: !this.props.disableComponentInteractivity,
                    onSuppressEmbed: s ? this.handleEmbedSuppressed : void 0,
                    renderTitle: this.renderEmbedTitle,
                    renderDescription: this.renderEmbedDescription,
                    message: l,
                    embedIndex: t,
                    shouldAgeVerify: c ?? !1,
                    ...n,
                }),
            },
            e.id,
        );
    };
    renderEmbedTitle = (e, t) =>
        e.type !== eY.Auw.RICH
            ? t
            : (null != e.url && "" !== e.url ? W.A.parseEmbedTitleWithoutLinks : W.A.parseEmbedTitle)(t, !0, {
                  channelId: this.props.channel.id,
              });
    renderEmbedDescription = (e, t, n) =>
        e.type === eY.Auw.RICH
            ? W.A.parse(t, !0, {
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
        e.shiftKey ? _.A.suppressEmbeds(t.id, n.id) : this.setState({ showSuppressModal: !0 });
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
                      eW.z.has(t.type) ||
                      (0, ex.p6)(t) ||
                      ((0, B.f)(t) && !(0, F.d)(e)) ||
                      (0, ex.V)(t) ||
                      (0, ex.G8)(t)
                  )
                      return null;
                  let l = { renderImageComponent: ew.LL, renderVideoComponent: ew.$o, renderLinkComponent: ew.bU };
                  if (
                      t.type === eY.Auw.ARTICLE &&
                      null != t.url &&
                      /^https?:\/\/(?:canary|ptb|www)?\.discord(?:app)?\.com\/store\/skus\/(?:[0-9]+)/.test(t.url) &&
                      null != t.provider &&
                      "Discord" === t.provider.name
                  ) {
                      let a = eC.A.safeParseWithQuery(t.url);
                      if (null != a && null != a.pathname) {
                          let r = a.pathname.split("/")[3];
                          if (null != r)
                              return (0, i.jsx)(
                                  p.A,
                                  { skuId: r, renderFallback: () => this.renderEmbed(t, n, l, e) },
                                  t.id,
                              );
                      }
                  }
                  return this.renderEmbed(t, n, l, e);
              });
    }
    renderComponentAccessories(e) {
        if (0 === e.components.length) return null;
        let {
            gifAutoPlay: t,
            enabledContentHarmTypeFlags: n,
            shouldHideMediaOptions: l,
            disableComponentInteractivity: a,
            onMediaItemContextMenu: r,
        } = this.props;
        return (0, i.jsx)(ek.N, {
            gifAutoPlay: t,
            getGifFavButton: eZ,
            getOnMediaItemContextMenu:
                null == r
                    ? void 0
                    : (e) => (t) => {
                          t.stopPropagation(), t.preventDefault(), r?.(t, e);
                      },
            shouldHideMediaOptions: l,
            enabledContentHarmTypeFlags: n,
            children: (0, i.jsx)(H.Ay, { message: e, shouldDisableInteractiveComponents: a }),
        });
    }
    renderActivityInvite(e) {
        if (null == e.activity) return null;
        let { channel: t } = this.props;
        return (0, i.jsx)(eU.A, { channel: t, message: e, hideParty: !1 });
    }
    renderPublishBump(e) {
        return this.props.channel.type !== eY.rbe.GUILD_ANNOUNCEMENT || this.props.isMessageSnapshot
            ? null
            : (0, i.jsx)(I.A, { channelId: e.channel_id, messageId: e.id });
    }
    renderEphemeralAccessories(e) {
        return (0, ev.ec)(e)
            ? (0, i.jsx)(eL.A, {
                  message: e,
                  onDeleteMessage: () => {
                      _.A.dismissAutomatedMessage(e);
                  },
              })
            : null;
    }
    renderStickersAccessories(e) {
        let t = (0, ea.o6)(e),
            { channel: n, isInteracting: l } = this.props;
        return 0 === t.length
            ? null
            : t.map((e) => (0, i.jsx)(er.A, { channel: n, isInteracting: l, renderableSticker: e }, e.id));
    }
    renderThreadAccessories(e) {
        if (e.hasFlag(eY.pr7.HAS_THREAD) && !1 !== this.props.renderThreadAccessory)
            return (0, i.jsx)(eo.A, { message: e, compact: this.props.compact });
    }
    renderThreadRoleMentionWarning(e) {
        if (
            e.hasFlag(eY.pr7.FAILED_TO_MENTION_SOME_ROLES_IN_THREAD) &&
            this.props.isCurrentUser &&
            !(Date.now() - eE.default.extractTimestamp(e.id) >= eJ)
        )
            return (0, i.jsx)("div", { className: eK.xM, children: eq.intl.string(eq.t.ma8Rs0) });
    }
    renderSuppressConfirmModal() {
        let { channel: e, message: t } = this.props;
        return (0, i.jsxs)(m.MJ3, {
            dismissable: !0,
            header: eq.intl.string(eq.t.VL1KOk),
            confirmText: eq.intl.string(eq.t.YEHppG),
            cancelText: eq.intl.string(eq.t["ETE/oC"]),
            onCancel: () => this.setState({ showSuppressModal: !1 }),
            onConfirm: () => {
                _.A.suppressEmbeds(e.id, t.id), this.setState({ showSuppressModal: !1 });
            },
            children: [
                (0, i.jsx)(m.Text, {
                    variant: "text-md/normal",
                    color: "text-default",
                    className: eK.IX,
                    children: eq.intl.string(eq.t["vXZ+Fo"]),
                }),
                (0, i.jsx)(m.Text, {
                    variant: "text-md/normal",
                    color: "text-muted",
                    children: eq.intl.string(eq.t["5j2by3"]),
                }),
            ],
        });
    }
    renderRemoveAttachmentConfirmModal() {
        let { channel: e, message: t } = this.props,
            { attachmentToDelete: n } = this.state;
        return null == n
            ? void this.setState({ showRemoveAttachmentModal: !1 })
            : (0, i.jsx)(m.MJ3, {
                  dismissable: !0,
                  header: eq.intl.string(eq.t.CbTIEo),
                  confirmText: eq.intl.string(eq.t.kFwAsa),
                  cancelText: eq.intl.string(eq.t["ETE/oC"]),
                  onCancel: () => this.setState({ showRemoveAttachmentModal: !1, attachmentToDelete: null }),
                  onConfirm: () => {
                      let i = t.attachments.filter((e) => e.id !== n.id);
                      _.A.patchMessageAttachments(e.id, t.id, i),
                          this.setState({ showRemoveAttachmentModal: !1, attachmentToDelete: null });
                  },
                  children: (0, i.jsx)(m.Text, {
                      variant: "text-md/normal",
                      color: "text-default",
                      className: eK.IX,
                      children: eq.intl.string(eq.t.faHmO3),
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
            : (0, i.jsx)(eR.A, {
                  application: t,
                  channelId: this.props.channel.id,
                  guildId: this.props.channel.guild_id,
                  message: e,
              });
    }
    renderMediaPostEmbeds(e) {
        return e.embeds.flatMap((t) =>
            t.type !== eY.Auw.POST_PREVIEW || null == t.url
                ? []
                : (0, i.jsx)(Q.A, { embedUrl: t.url, message: e, channel: this.props.channel }, t.id),
        );
    }
    renderSafetyPolicyNotice(e) {
        return 1 === e.embeds.length && e.embeds[0].type === eY.Auw.SAFETY_POLICY_NOTICE
            ? (0, i.jsx)(en.V, { message: e })
            : null;
    }
    renderSafetySystemNotification(e) {
        return 1 === e.embeds.length && e.embeds[0].type === eY.Auw.SAFETY_SYSTEM_NOTIFICATION
            ? (0, i.jsx)(ei.l, { embed: e.embeds[0] })
            : null;
    }
    renderMediaObscureNotice(e) {
        return (0 !== e.attachments.length || 0 !== e.embeds.length) && (0, y.KM)(e)
            ? (0, i.jsx)(R.A, { message: e })
            : null;
    }
    renderPoll(e, t) {
        if (null != t) return (0, i.jsx)(Z.A, { message: e, poll: t, className: eK.PM });
    }
    renderShareClientTheme(e) {
        return null != e.sharedClientTheme ? (0, i.jsx)(v.f, { message: e }) : null;
    }
    renderReportedMessage(e) {
        if (e.messageSnapshots.length > 0 && (0, ee.Mn)(e, this.props.channel)) return (0, i.jsx)(et.A, { message: e });
    }
    renderForwardedMessage(e) {
        if (e.messageSnapshots.length > 0 && !(0, ee.Mn)(e, this.props.channel)) return (0, i.jsx)(M.A, { message: e });
    }
    renderEditedTag(e, t) {
        return (0, i.jsx)(eV.A, { message: e, compact: t, location: eV.O.AFTER_ACCESSORIES });
    }
    render() {
        let { className: e, message: t, poll: n, compact: l } = this.props,
            { showSuppressModal: a, showRemoveAttachmentModal: s } = this.state,
            o = this.renderEditedTag(t, l),
            d = this.renderCodedLinks(t),
            c = this.renderGiftCodes(t),
            u = this.renderAttachments(t),
            m = this.renderCtaButton(),
            _ = this.renderEmbeds(t),
            h = this.renderActivityInvite(t),
            p = this.renderReactions(t),
            g = this.renderPublishBump(t),
            A = this.renderEphemeralAccessories(t),
            f = this.renderStickersAccessories(t),
            x = this.renderThreadAccessories(t),
            E = this.renderComponentAccessories(t),
            C = this.renderThreadRoleMentionWarning(t),
            I = this.renderEmbeddedApplicationInstanceEmbed(t),
            T = this.renderInteractionPremiumUpsell(t),
            v = this.renderMediaPostEmbeds(t),
            N = this.renderSafetyPolicyNotice(t),
            S = this.renderSafetySystemNotification(t),
            b = this.renderMediaObscureNotice(t),
            y = this.renderPoll(t, n),
            j = this.renderForwardedMessage(t),
            R = this.renderReportedMessage(t),
            L = this.renderShareClientTheme(t);
        return null == d &&
            null == u &&
            null == _ &&
            null == h &&
            null == p &&
            null == c &&
            null == g &&
            null == A &&
            null == f &&
            null == x &&
            null == E &&
            null == I &&
            null == C &&
            null == v &&
            null == N &&
            null != T &&
            null == y &&
            null == j &&
            null == R &&
            null == L
            ? null
            : (0, i.jsxs)("div", {
                  id: (0, eD.XL)(t),
                  className: r()(e, eK.kL),
                  children: [
                      R,
                      j,
                      C,
                      y,
                      L,
                      d,
                      c,
                      v,
                      u,
                      m,
                      _,
                      b,
                      h,
                      f,
                      E,
                      I,
                      T,
                      o,
                      p,
                      g,
                      A,
                      a && this.renderSuppressConfirmModal(),
                      s && this.renderRemoveAttachmentConfirmModal(),
                      x,
                      N,
                      S,
                  ],
              });
    }
}
function e0(e) {
    let { channel: t, message: n, renderSuppressEmbeds: l, isMessageSnapshot: a } = e,
        r = (0, d.bG)([eu.default], () => eu.default.getId()),
        s = ed.X6.useSetting(),
        c = ed.hD.useSetting(),
        u = ed.rs.useSetting() && !(0, eb.A)(e.message),
        m = ed.jW.useSetting() && !1 !== e.renderReactions,
        _ = ed.kt.useSetting(),
        h = (0, d.bG)([e_.A], () => null == t.guild_id || e_.A.canChatInGuild(t.guild_id), [t]),
        p = (0, d.bG)([V.A], () => null != t.guild_id && V.A.isLurking(t.guild_id), [t]),
        g = (0, d.bG)([em.Ay, ep.default], () => {
            let e = ep.default.getCurrentUser();
            return (null != t.guild_id && null != e ? em.Ay.getMember(t.guild_id, e.id)?.isPending : null) ?? !1;
        }),
        { canAddNewReactions: A, canManageMessages: f } = (0, d.cf)(
            [eh.A],
            () => ({
                canAddNewReactions: h && eh.A.can(eY.xBc.ADD_REACTIONS, t),
                canManageMessages: eh.A.can(eY.xBc.MANAGE_MESSAGES, t),
            }),
            [h, t],
        ),
        x = (0, D.ix)(t.guild_id),
        [, E] = (0, k.c)(t.guild_id),
        C = (0, es.Id)(t),
        I =
            (r === n.author.id || f) &&
            n.author.id !== eY.oIV &&
            !1 !== l &&
            !(0, o.Lt)(n.flags, eY.pr7.EPHEMERAL) &&
            C &&
            (0, eS.A)(n) >= 1,
        T = r === n.author.id && C && !a,
        v = n.author.id === r,
        N = n.isFirstMessageInForumPost(t),
        S = (0, ey.A)({
            channel: t,
            canChat: h,
            renderReactions: m,
            canAddNewReactions: A,
            isLurking: p,
            communicationDisabled: E,
            isActiveChannelOrUnarchivableThread: C,
            isAutomodQuarantined: x,
        }),
        y = (0, z.S)((n.editedTimestamp ?? n.timestamp).valueOf()),
        R = (0, K.A)(t?.id),
        L = (0, X.A)(n),
        M = (0, j.P)(n),
        O = (0, eN.z)(t),
        P = (0, eI._f)(n.id, n.channel_id),
        U = (0, b._R)();
    return (0, i.jsx)(e$, {
        canSuppressEmbeds: I,
        canDeleteAttachments: T,
        ...S,
        disableReactionReads: !!N || S.disableReactionReads,
        ...e,
        hasSpoilerEmbeds: e.hasSpoilerEmbeds && O,
        hasBailedAst: e.hasBailedAst,
        isLurking: p && h,
        isPendingMember: g && h,
        isCurrentUser: v,
        inlineAttachmentMedia: s,
        inlineEmbedMedia: c,
        renderEmbeds: u,
        gifAutoPlay: _,
        canRenderReferralEmbed: t.isDM(),
        poll: L,
        showListsAndHeaders: y,
        showMaskedLinks: y,
        shouldHideMediaOptions: R,
        enabledContentHarmTypeFlags: M,
        ctaButtonType: P,
        shouldAgeVerify: U,
    });
}
let e1 = (e) => {
    let {
            message: t,
            channel: n,
            disableReactionReads: l = !1,
            renderThreadAccessory: a = !1,
            disableReactionCreates: r = !0,
            disableReactionUpdates: s = !0,
            disableComponentInteractivity: o = !0,
            ...d
        } = e,
        c = ed.X6.useSetting(),
        u = ed.hD.useSetting(),
        m = ed.rs.useSetting(),
        _ = ed.kt.useSetting(),
        h = (0, z.S)((t.editedTimestamp ?? t.timestamp).valueOf()),
        p = (0, K.A)(n?.id),
        g = (0, j.P)(t),
        A = (0, eI._f)(t.id, t.channel_id),
        f = (0, X.A)(t);
    return (0, i.jsx)(e$, {
        ...d,
        message: t,
        channel: n,
        disableReactionReads: l,
        disableReactionCreates: r,
        disableReactionUpdates: s,
        disableComponentInteractivity: o,
        canSuppressEmbeds: !1,
        canDeleteAttachments: !1,
        renderThreadAccessory: a,
        inlineAttachmentMedia: c,
        inlineEmbedMedia: u,
        renderEmbeds: m,
        gifAutoPlay: _,
        poll: f,
        showListsAndHeaders: h,
        showMaskedLinks: h,
        shouldHideMediaOptions: p,
        enabledContentHarmTypeFlags: g,
        ctaButtonType: A,
    });
};
