n.d(t, { A: () => sl });
var i,
    l,
    s = n(477900),
    a = n(582128),
    r = n.t(a, 2),
    o = n(143413),
    d = n(17928),
    c = n(192308),
    u = n(821609),
    m = n(117723),
    h = n(442433),
    g = n(148494),
    p = n(730852),
    A = n(401843),
    x = n(155718),
    f = n(626584),
    E = n(877133),
    I = n(878678),
    C = n(447215),
    _ = n(888675),
    v = n(976860),
    N = n(280450),
    j = n(696451),
    T = n(287809),
    S = n(654265),
    y = n(375708);
function b(e, t) {
    let { joinRequest: n, joinRequestGuild: i } = (0, S.A)(t.id),
        l = (0, d.bG)([T.default], () => T.default.getUser(n?.userId)),
        s = (0, C.P)({ user: l, channelId: t.id, guildId: t.guild_id, messageId: e.id }),
        r = (0, d.bG)([j.Ay, N.default], () => j.Ay.isMember(i?.id, N.default.getId())),
        o = a.useCallback(() => {
            r && null != i && (0, v.uh)(i.id);
        }, [i, r]);
    return { guild: i, joinRequest: n, usernameHook: s, guildNameClick: o };
}
var R = n(702841),
    k = n(834730),
    M = n(775602),
    L = n(763754),
    O = n(953727);
function P(e) {
    let { width: t = 440, height: n = 200, avatar: i, ...l } = e;
    return (0, s.jsxs)("svg", {
        ...(0, O.A)(l),
        width: t,
        height: n,
        viewBox: `0 0 ${t} ${n}`,
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ...l,
        children: [
            (0, s.jsx)("rect", { y: "12", width: "440", height: "176", rx: "4", fill: "url(#paint0_linear_0_1)" }),
            (0, s.jsx)("path", {
                d: "M4 12C1.79086 12 0 13.7909 0 16V87.7111C0 89.0292 0.644578 90.2711 1.75757 90.9773C19.6029 102.3 40.6908 102.01 54.593 95.3775C74.7698 85.8079 78.9758 61.6391 58.8478 45.7384C50.2069 38.7483 44.7223 29.0027 45.9176 20.7172C46.434 17.1376 44.0823 12 40.4657 12H4Z",
                fill: "#3442D9",
            }),
            (0, s.jsx)("path", {
                d: "M440 44.2244C440 42.4907 438.885 40.9507 437.228 40.4399C387.67 25.1621 330.882 28.8097 301.274 66.4895C271.113 104.874 240.425 106.271 206.014 93.988C172.008 81.8488 55.3406 98.3422 74.0098 184.887C74.3973 186.683 76.0228 188 77.8605 188H436C438.209 188 440 186.209 440 184V44.2244Z",
                fill: "#3442D9",
            }),
            (0, s.jsx)("path", {
                d: "M397.403 63.2537C395.463 62.0597 394.269 60.2687 393.97 58.0299L393.373 54.2985C393.373 54.1493 393.224 54 392.925 54C392.776 54 392.627 54.1493 392.627 54.2985L392.03 58.0299C391.731 60.2687 390.537 62.0597 388.597 63.2537L388.149 63.5522C388 63.7015 388 63.8507 388 64C388 64.1493 388 64.1493 388.149 64.2985L388.597 64.597C390.537 65.791 391.731 67.5821 392.03 69.8209L392.627 73.5522C392.627 73.8507 392.776 74 392.925 74C393.224 74 393.373 73.8507 393.373 73.5522L393.97 69.8209C394.269 67.5821 395.463 65.791 397.403 64.597L397.851 64.2985C398 64.1493 398 64.1493 398 64C398 63.8507 398 63.7015 397.851 63.5522L397.403 63.2537Z",
                fill: "#57F287",
            }),
            (0, s.jsx)("path", {
                d: "M300.628 164.106C299.09 163.2 298.013 161.691 297.705 159.879L297.244 156.86C297.244 156.71 297.09 156.559 296.936 156.559C296.782 156.559 296.628 156.71 296.628 156.86L296.167 159.879C296.013 161.691 294.936 163.2 293.398 164.106L292.936 164.408C292.782 164.559 292.782 164.559 292.782 164.71V165.011H293.244C294.782 165.917 295.859 167.577 296.013 169.389L296.475 172.408C296.475 172.559 296.628 172.559 296.782 172.559C296.936 172.559 297.09 172.559 297.09 172.408L297.551 169.389C297.859 167.577 298.936 166.068 300.475 165.011H300.782V164.71C300.782 164.559 300.782 164.408 300.628 164.408V164.106Z",
                fill: "#808AFF",
            }),
            (0, s.jsx)("path", {
                d: "M232.642 35.4003C231.478 34.6839 230.761 33.5197 230.582 32.1765L230.224 30.0272C230.224 29.8481 230.134 29.7585 229.955 29.7585C229.866 29.7585 229.776 29.8481 229.776 30.0272L229.418 32.1765C229.239 33.5197 228.522 34.6839 227.358 35.4003L227.09 35.5794C227 35.669 227 35.669 227 35.7585C227 35.8481 227 35.9376 227.09 35.9376L227.358 36.2063C228.522 36.9227 229.239 37.9974 229.418 39.3406L229.776 41.5794C229.776 41.669 229.866 41.7585 229.955 41.7585C230.134 41.7585 230.224 41.669 230.224 41.5794L230.582 39.3406C230.761 37.9974 231.478 36.9227 232.642 36.2063L232.91 35.9376C233 35.8481 233 35.8481 233 35.7585C233 35.669 232.91 35.669 232.91 35.5794L232.642 35.4003Z",
                fill: "#FFE75C",
            }),
            (0, s.jsx)("defs", {
                children: (0, s.jsxs)("linearGradient", {
                    id: "paint0_linear_0_1",
                    x1: "220",
                    y1: "12",
                    x2: "220",
                    y2: "188",
                    gradientUnits: "userSpaceOnUse",
                    children: [
                        (0, s.jsx)("stop", { stopColor: "#686bff" }),
                        (0, s.jsx)("stop", { offset: "1", stopColor: "#c356fd" }),
                    ],
                }),
            }),
            (0, s.jsx)("svg", {
                width: 100,
                height: 100,
                viewBox: "-2 -15 50 50",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                children: (0, s.jsxs)("g", {
                    clipPath: "url(#clip0_2645_182555)",
                    children: [
                        (0, s.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M13.6698 8.91016C14.5646 10.1567 16.3407 10.3342 17.4866 9.44283C17.4957 9.46624 17.5008 9.49191 17.5008 9.51916V15.8337C17.5008 17.2144 16.3815 18.3337 15.0008 18.3337H12.7092C12.5941 18.3337 12.5008 18.2404 12.5008 18.1253V13.3337C12.5008 12.4132 11.7547 11.667 10.8342 11.667H9.16748C8.24699 11.667 7.5008 12.4132 7.5008 13.3337V18.1253C7.5008 18.2404 7.40753 18.3337 7.29247 18.3337H5.0008C3.62009 18.3337 2.5008 17.2144 2.5008 15.8337V9.51916C2.5008 9.36341 2.66628 9.26158 2.81091 9.31949C3.23542 9.48933 3.70172 9.58366 4.19593 9.58366C5.27336 9.58366 6.24385 9.12583 6.92345 8.39408C7.0135 8.29708 7.17004 8.29679 7.26039 8.39349C7.94479 9.12583 8.91932 9.58366 10.0008 9.58366C11.0823 9.58366 12.0568 9.12583 12.7412 8.39349C12.8316 8.29679 12.9882 8.29708 13.0782 8.39408C13.2565 8.58599 13.4548 8.75916 13.6698 8.91016ZM11.7497 6.67891C9.42957 5.8204 9.4179 2.5511 11.7147 1.6683C11.699 1.66743 11.6833 1.66699 11.6675 1.66699H8.33415C7.87391 1.66699 7.50082 2.04009 7.50082 2.50033V5.83366C7.50082 5.87681 7.50191 5.9197 7.50407 5.96231C7.52181 6.31232 7.61153 6.64333 7.75873 6.94085C7.77282 6.96931 7.78743 6.99747 7.80255 7.02531C8.2259 7.80462 9.05157 8.33366 10.0008 8.33366C10.984 8.33366 11.8346 7.76614 12.2429 6.94084L12.2543 6.91751C12.2613 6.90286 12.2682 6.88812 12.2751 6.87331L11.7497 6.67891ZM15.8231 8.3336C15.4338 8.32949 15.0467 8.10931 14.8853 7.67305L14.4606 6.52524C14.2917 6.06904 13.9321 5.70936 13.4759 5.54055L13.3342 5.4881V2.84588L13.4759 2.79343C13.9321 2.62463 14.2917 2.26494 14.4606 1.80874L14.5131 1.66699H15.2462C16.3397 1.66699 17.3062 2.37762 17.6324 3.42131L18.1647 5.12491C18.2057 5.25598 18.2352 5.38724 18.254 5.51775L18.1924 5.54055C17.7361 5.70936 17.3765 6.06904 17.2077 6.52524L16.783 7.67305C16.627 8.09458 16.2603 8.31438 15.8847 8.33245C15.8642 8.33308 15.8437 8.33346 15.8231 8.3336ZM12.5008 3.15424V5.17974L12.3281 5.11583C11.4472 4.78989 11.4472 3.54409 12.3281 3.21816L12.5008 3.15424ZM4.75546 1.66699C3.662 1.66699 2.69541 2.37762 2.36926 3.4213L1.83688 5.12491C1.52876 6.11092 1.8679 7.1068 2.56708 7.72187C2.99643 8.09957 3.56156 8.33366 4.19593 8.33366C5.13437 8.33366 5.95065 7.81064 6.36917 7.04019C6.38619 7.00888 6.40255 6.97714 6.41823 6.94502C6.57788 6.618 6.66748 6.25052 6.66748 5.86211V2.50033C6.66748 2.04009 6.29438 1.66699 5.83415 1.66699H4.75546Z",
                            fill: "white",
                        }),
                        (0, s.jsx)("path", {
                            d: "M14.8838 0.660607C15.2097 -0.220202 16.4556 -0.220202 16.7815 0.660607L17.2062 1.80842C17.375 2.26462 17.7347 2.6243 18.1909 2.79311L19.3387 3.21783C20.2195 3.54377 20.2195 4.78957 19.3387 5.1155L18.1909 5.54023C17.7347 5.70903 17.375 6.06872 17.2062 6.52492L16.7815 7.67272C16.4556 8.5535 15.2097 8.5535 14.8838 7.67272L14.4591 6.52492C14.2903 6.06872 13.9306 5.70903 13.4744 5.54023L12.3266 5.1155C11.4458 4.78957 11.4458 3.54377 12.3266 3.21783L13.4744 2.79311C13.9306 2.6243 14.2903 2.26462 14.4591 1.80842L14.8838 0.660607Z",
                            fill: "white",
                        }),
                    ],
                }),
            }),
            (0, s.jsx)("foreignObject", { x: "30", y: "100", width: "56", height: "56", children: i }),
        ],
    });
}
var D = n(652215),
    U = n(21088);
function G(e) {
    let { guildId: t, user: n, username: i } = e,
        l = (0, R.bG)([M.Ay], () => !M.Ay.useReducedMotion),
        a = n.getAvatarURL(t, 56, l),
        r = (0, s.jsx)("img", { src: a, className: U.dj, alt: "" });
    return (0, s.jsxs)("div", {
        className: U.uE,
        role: "img",
        "aria-label": y.intl.formatToPlainString(y.t["utf8+W"], { username: i }),
        children: [
            (0, s.jsx)(P, { avatar: r }),
            (0, s.jsx)(k.E, {
                className: U.Bi,
                tag: "p",
                color: "status-positive-text",
                variant: "heading-xl/medium",
                children: y.intl.format(y.t["52BAtC"], {
                    username: i,
                    usernameHook: (e, t) =>
                        (0, s.jsx)(
                            k.E,
                            {
                                tag: "span",
                                color: "status-positive-text",
                                variant: "heading-xxl/extrabold",
                                lineClamp: 3,
                                children: e,
                            },
                            t,
                        ),
                }),
            }),
        ],
    });
}
function w(e) {
    let { channel: t, message: i, compact: l } = e,
        a = (0, L.Ay)(i),
        r = (0, C.P)({ user: i.author, channelId: t.id, guildId: t.guild_id, messageId: i.id })(a),
        o = y.intl.format(y.t.TQs67g, {
            username: a.nick,
            usernameHook: r,
            productName: i.purchaseNotification?.guild_product_purchase?.product_name ?? "",
            handleProductListingClick: () => {
                (0, v.pX)(
                    D.BVt.GUILD_PRODUCT(t.guild_id, i.purchaseNotification?.guild_product_purchase?.listing_id ?? ""),
                );
            },
        });
    return (0, s.jsxs)(s.Fragment, {
        children: [
            (0, s.jsx)(_.A, { icon: n(617184), timestamp: i.timestamp, compact: l, children: o }),
            (0, s.jsx)(G, { username: a.nick, guildId: t.guild_id, user: i.author }),
        ],
    });
}
var H = n(793574),
    B = n(688810),
    F = n(942075),
    V = n(665260),
    z = n(355622),
    J = n(148355),
    K = n(406704),
    Y = n(576705),
    W = n(174459),
    X = n(935208),
    Z = n(806150),
    q = n(646405);
function Q(e) {
    let { assets: t, currentUser: n, message: i } = e,
        l = (X.default.extractTimestamp(n.id) + X.default.extractTimestamp(i.id)) % t.length;
    return t[l];
}
function $(e) {
    let { currentUser: t, channel: n, message: i, buttonLabels: l, stickers: r, event: o, eventProperties: d } = e,
        c = a.useMemo(() => Q({ assets: r, currentUser: t, message: i }), [r, t, i]),
        m = a.useMemo(() => Q({ assets: l, currentUser: t, message: i }), [l, t, i]),
        h = a.useCallback(async () => {
            let { valid: e } = await (0, Z.i)({ type: z.oU.FORM, content: "", channel: n });
            e &&
                (!(function (e) {
                    let { channel: t, message: n, sticker: i } = e;
                    g.A.sendGreetMessage(
                        t.id,
                        i.id,
                        g.A.getSendMessageOptionsForReply({
                            channel: t,
                            message: n,
                            shouldMention: !0,
                            showMentionToggle: !0,
                        }),
                    );
                })({ channel: n, message: i, sticker: c }),
                (function (e) {
                    let { sticker: t, event: n, eventProperties: i } = e;
                    null != n && W.default.track(n, { ...i, sticker_id: t.id });
                })({ sticker: c, event: o, eventProperties: d }));
        }, [n, i, c, o, d]);
    return (0, s.jsx)(u.$, {
        icon: { type: "sticker", asset: c, component: J.A },
        text: m,
        onClick: h,
        variant: "secondary",
    });
}
function ee(e) {
    let { channel: t, message: n, buttonLabels: i, stickers: l, event: a, eventProperties: r } = e,
        o = T.default.getCurrentUser(),
        c = (function (e) {
            let { channel: t, message: n, currentUser: i } = e;
            return (0, d.bG)([Y.A, j.Ay], () => {
                let e = t.guild_id;
                if (null == i || null == e) return !1;
                let l = (0, K.UJ)(t),
                    s = Y.A.can(D.xBc.SEND_MESSAGES, t),
                    a = j.Ay.getMember(e, i.id)?.isPending,
                    r = n.author.bot;
                return s && !l && !a && !r;
            });
        })({ channel: t, message: n, currentUser: o });
    return null != o && c
        ? (0, s.jsx)("div", {
              className: q.S,
              children: (0, s.jsx)($, {
                  currentUser: o,
                  channel: t,
                  message: n,
                  buttonLabels: i,
                  stickers: l,
                  event: a,
                  eventProperties: r,
              }),
          })
        : null;
}
var et = n(71393),
    en = n(226139);
function ei(e) {
    let { channel: t, message: n } = e,
        i = n.roleSubscriptionData?.is_renewal ? (0, en.J9)() : (0, en.oL)(),
        l = t.guild_id,
        r = (0, d.bG)([et.A], () => et.A.getGuild(l)?.systemChannelFlags, [l]),
        o = null != r && (0, V.Lt)(r, D.ogj.SUPPRESS_ROLE_SUBSCRIPTION_PURCHASE_NOTIFICATION_REPLIES),
        c = a.useMemo(() => (0, F.y4)(t, n), [t, n]);
    return o
        ? null
        : (0, s.jsx)(ee, {
              channel: t,
              message: n,
              buttonLabels: i,
              stickers: en.D3,
              event: D.HAw.ROLE_SUBSCRIPTION_PURCHASE_SYSTEM_MESSAGE_CTA_CLICKED,
              eventProperties: c,
          });
}
var el = n(772303);
function es(e) {
    let { guildId: t, user: n, className: i } = e,
        l = (0, d.bG)([M.Ay], () => !M.Ay.useReducedMotion),
        a = n.getAvatarURL(t, 56, l),
        r = (0, s.jsx)("foreignObject", {
            x: "30",
            y: "68",
            width: "56",
            height: "56",
            transform: "skewX(12)",
            children: (0, s.jsx)("img", { src: a, className: el.dj, alt: "" }),
        });
    return (0, s.jsx)("div", {
        className: i,
        children: (0, s.jsxs)("svg", {
            width: "128",
            height: "200",
            viewBox: "0 0 128 200",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            className: el.JW,
            children: [
                (0, s.jsx)("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M41.6475 3.07525C42.2166 3.01705 42.7941 2.98723 43.3787 2.98723H44.0149C51.1639 2.98723 57.3812 8.03091 58.5312 14.9582L58.5326 14.9664L71.1297 85.803L74.1529 85.2934L61.5601 14.4815C61.5597 14.4786 61.5592 14.4758 61.5587 14.4729C60.1604 6.07701 52.6392 0 44.0149 0H42.997C42.4189 0 41.8467 0.037182 41.283 0.10879C31.6239 1.11743 24.0326 9.0199 24.0326 18.799C24.0326 21.3525 24.5847 23.8942 25.5481 26.1672L25.5512 26.1745L25.5543 26.1817C30.6753 37.9136 33.7197 47.8651 33.2106 58.7186C32.7013 69.5731 28.6272 81.5075 19.156 97.1507C9.58001 112.967 1.96875 129.323 0.328288 144.93C-1.32267 160.636 3.084 175.549 17.4069 188.258C44.018 211.936 78.8775 196.708 84.4502 170.024C87.2081 156.818 84.3006 145.78 79.001 135.687C75.0979 128.255 69.8387 121.246 64.61 114.277C62.8057 111.873 61.0052 109.473 59.2652 107.063C52.5319 97.7348 49.6357 89.4917 48.5724 81.9158C47.538 74.5461 48.2262 67.7588 48.9086 61.0273C48.9314 60.803 48.9541 60.5787 48.9768 60.3545C50.4158 46.1192 45.9689 34.8772 40.4143 27.5533L40.4092 27.5466L34.5424 19.988L34.533 19.9764C30.8561 15.4298 31.6398 8.83644 36.3021 5.27079C37.8665 4.11054 39.7105 3.32756 41.6475 3.07525ZM29.4797 10.5429C27.9714 12.9383 27.1008 15.7614 27.1008 18.799C27.1008 20.9399 27.5653 23.0928 28.3813 25.0206C33.564 36.8951 36.8159 47.3374 36.2756 58.8549C35.7352 70.3737 31.4122 82.7904 21.7991 98.6677C12.2907 114.372 4.95262 130.278 3.38056 145.234C1.81906 160.089 5.93633 174.039 19.4752 186.051L19.4768 186.053C44.2662 208.11 76.329 193.919 81.4435 169.429C84.0293 157.047 81.3387 146.702 76.2691 137.047C72.4865 129.844 67.4387 123.116 62.2536 116.205C60.4212 113.762 58.5717 111.297 56.7549 108.78C49.7474 99.0725 46.6638 90.3811 45.5325 82.3203C44.4482 74.5953 45.1687 67.4973 45.8457 60.8276C45.8717 60.5718 45.8976 60.3165 45.9233 60.0619C47.2829 46.613 43.0814 36.1022 37.951 29.3343L32.1127 21.8124C29.4463 18.5078 28.6103 14.3561 29.4797 10.5429Z",
                    fill: "#57F287",
                }),
                (0, s.jsx)("path", {
                    d: "M59.282 31.4071C56.8646 29.0585 57.1191 27.3279 58.0097 24.7321C58.1369 24.2377 58.6458 23.9905 59.1548 23.9905H62.9716V31.4071H59.282Z",
                    fill: "#57F287",
                }),
                (0, s.jsx)("path", {
                    d: "M125.569 155.388L122.388 158.601C120.734 160.332 118.317 161.321 115.899 161.321H101.268V135.486H125.569L127.859 147.971C128.368 150.69 127.477 153.41 125.569 155.388Z",
                    fill: "#8CD9FF",
                }),
                (0, s.jsx)("path", {
                    d: "M29.2561 45.6221L25.8209 49.0832C23.9125 51.0609 23.0219 53.9039 23.5308 56.6233L26.7115 74.6704H45.4142V45.6221H29.2561Z",
                    fill: "#8CD9FF",
                }),
                (0, s.jsx)("path", {
                    d: "M124.551 151.061C125.568 155.635 122.515 160.208 117.68 161.197C117.044 161.321 116.281 161.445 115.645 161.321H52.7936C46.6867 161.074 41.4703 156.871 40.198 151.061L23.531 56.7471C22.5132 52.1735 25.5667 47.6 30.4014 46.6111C31.0375 46.4875 31.8009 46.3639 32.437 46.4875H95.288C101.395 46.7347 106.611 50.9374 107.884 56.7471L124.551 151.061Z",
                    fill: "#8CD9FF",
                }),
                (0, s.jsx)("path", {
                    d: "M127.732 147.724C128.749 152.297 125.823 156.747 121.243 157.736C120.479 157.86 119.716 157.984 118.826 157.984H55.9745C49.8676 157.86 44.6512 153.534 43.3789 147.724L26.7119 53.5333C25.6941 48.9598 28.7476 44.3862 33.5823 43.3973C34.2184 43.2737 34.9818 43.1501 35.6179 43.2737H98.5962C104.703 43.3973 109.92 47.7237 111.065 53.5333L127.732 147.724Z",
                    fill: "white",
                }),
                (0, s.jsx)("path", {
                    d: "M78.7482 52.1736C79.2571 54.893 77.4759 57.6124 74.6769 58.1068C74.2952 58.2304 73.7863 58.2304 73.4046 58.2304H66.0253C62.4629 58.1068 59.4094 55.6346 58.6461 52.1736L55.3381 33.7557C54.8292 31.0363 56.6104 28.3169 59.4094 27.8225C59.7911 27.6989 60.3 27.6989 60.6817 27.6989H68.061C71.6234 27.8225 74.6769 30.2947 75.4402 33.7557L78.7482 52.1736Z",
                    fill: "black",
                }),
                (0, s.jsx)("path", {
                    d: "M115.39 139.071C115.899 142.285 113.736 145.375 110.428 145.87C109.919 145.993 109.537 145.993 109.028 145.993H62.7172C58.5186 145.87 54.829 143.027 53.9384 139.071C53.3022 135.857 55.4651 132.767 58.7731 132.149C59.282 132.025 59.7909 132.025 60.2998 132.025H106.611C110.81 132.149 114.499 134.992 115.39 139.071Z",
                    fill: "#FFC619",
                }),
                (0, s.jsx)("path", {
                    d: "M71.4152 52.8176C72.7444 51.4082 72.394 48.9945 70.6325 47.4264C68.8711 45.8582 66.3656 45.7295 65.0364 47.1389C63.7072 48.5482 64.0576 50.9619 65.819 52.5301C67.5805 54.0982 70.086 54.2269 71.4152 52.8176Z",
                    fill: "#5865F2",
                }),
                (0, s.jsx)("path", {
                    d: "M68.5697 30.9126C68.4425 31.1598 68.188 31.4071 67.9336 31.4071H60.8088C60.4271 31.4071 60.2998 31.1598 60.2998 31.0362C60.2998 30.9126 60.2998 30.9126 60.1726 30.9126V30.6654C60.1726 30.5418 60.1726 30.2946 60.2998 30.171C61.5721 27.0807 60.6815 25.5974 59.1548 24.4849V23.9905H64.3712C64.7529 23.9905 65.1345 23.9905 65.389 24.2377C67.9336 25.5974 70.0965 26.7099 68.5697 30.9126Z",
                    fill: "#57F287",
                }),
                (0, s.jsx)("path", {
                    d: "M63.4808 19.4171H59.155C58.7734 19.4171 58.5189 19.788 58.6461 20.0352L59.2823 23.9907H64.2442L63.4808 19.4171Z",
                    fill: "black",
                }),
                (0, s.jsx)("path", {
                    d: "M61.1485 21.3944C62.4818 21.3286 63.5224 20.5015 63.4728 19.547C63.4231 18.5925 62.302 17.872 60.9686 17.9378C59.6353 18.0035 58.5947 18.8306 58.6444 19.7851C58.694 20.7396 59.8152 21.4601 61.1485 21.3944Z",
                    fill: "black",
                }),
                r,
            ],
        }),
    });
}
var ea = n(746080),
    er = n(738390);
function eo(e) {
    let { username: t } = e;
    return (0, s.jsx)("div", {
        className: er._X,
        children: (0, s.jsx)(k.E, {
            tag: "p",
            className: er._X,
            color: "status-positive-text",
            variant: "heading-xl/medium",
            children: y.intl.format(y.t.MLKSln, {
                username: t,
                usernameHook: (e, t) =>
                    (0, s.jsx)(
                        k.E,
                        {
                            tag: "span",
                            color: "status-positive-text",
                            variant: "heading-xxl/extrabold",
                            lineClamp: 3,
                            children: e,
                        },
                        t,
                    ),
            }),
        }),
    });
}
function ed(e) {
    let { guildId: t, user: n, username: i } = e;
    return (0, s.jsxs)("div", {
        className: er.pG,
        role: "img",
        "aria-label": y.intl.formatToPlainString(y.t["utf8+W"], { username: i }),
        children: [(0, s.jsx)(es, { guildId: t, user: n, className: er.sz }), (0, s.jsx)(eo, { username: i })],
    });
}
var ec = n(698441),
    eu = n(484724),
    em = n(468689),
    eh = n(369606),
    eg = n(661531),
    ep = n(378570),
    eA = n(523154),
    ex = n(518782),
    ef = n(61567);
function eE(e) {
    let { message: t, channel: n, compact: i } = e,
        l = n.guild_id,
        r = (0, ex.Nu)(t.guildSpaceData?.leaderboard),
        o = (0, d.bG)([T.default], () =>
            (0, eA.U_)(r, T.default.getUser(r?.userId), T.default.getUser(r?.previousUserId)),
        ),
        c = o?.subject ?? null,
        u = o?.previousLeader ?? null,
        m = (0, L.d8)(c, n),
        h = (0, L.d8)(u, n),
        g = (0, C.P)({ user: c ?? void 0, channelId: n.id, guildId: l, messageId: t.id })(m),
        p = (0, C.P)({ user: u ?? void 0, channelId: n.id, guildId: l, messageId: t.id })(h),
        A = a.useCallback(() => {
            null != l && (0, ep.vn)(l, ea.VV.GUILD_SPACE, { source: "Leaderboard System Message" });
        }, [l]);
    if (null == o || null == l) return null;
    let x = (0, eA.Sx)(o.data, { username: m.nick, previousUsername: h.nick });
    if (null == x) return null;
    let f = y.intl.format(x.message, { ...x.values, usernameHook: g, previousUsernameHook: p });
    return (0, s.jsxs)(_.A, {
        iconNode: (0, s.jsx)(eh.TrophyIcon, { size: "sm", color: eg.A.colors.ICON_MUTED }),
        timestamp: t.timestamp,
        compact: i,
        children: [f, (0, s.jsx)(_.A.Action, { onClick: A, children: y.intl.string(ef.default.O1h3uU) })],
    });
}
var eI = n(193885),
    eC = n(403362);
let e_ = function (e) {
    let { message: t, channel: n, compact: i, data: l } = e,
        r = (0, d.yK)(
            [T.default],
            () =>
                l.sampled_user_ids
                    .map((e) => T.default.getUser(e))
                    .filter(eC.Vq)
                    .slice(0, 2),
            [l.sampled_user_ids],
        ),
        [o, c] = r,
        u = (0, L.d8)(o, n),
        m = (0, L.d8)(c, n),
        h = (0, C.P)({ user: o, channelId: n.id, guildId: n.guild_id, messageId: t.id }),
        g = (0, C.P)({ user: c, channelId: n.id, guildId: n.guild_id, messageId: t.id }),
        p = n.guild_id,
        A = a.useCallback(() => {
            null != p && (0, v.pX)(D.BVt.CHANNEL(p, ea.VV.GUILD_SPACE));
        }, [p]),
        x = l.connected_user_count - r.length,
        f = 0 === r.length || x <= 0;
    return (0, s.jsxs)(_.A, {
        iconNode: (0, s.jsx)(eI.V, { size: "xs" }),
        compact: i,
        timestamp: t.timestamp,
        children: [
            f
                ? y.intl.string(ef.default.Sxxqdx)
                : y.intl.format(ef.default.fcmI49, {
                      displayCount: r.length,
                      username: u.nick,
                      usernameHook: h(u),
                      username2: m.nick,
                      username2Hook: g(m),
                      additionalCount: x,
                  }),
            null != p ? (0, s.jsx)(_.A.Action, { onClick: A, children: y.intl.string(y.t.RzWDqY) }) : null,
        ],
    });
};
var ev = n(503698),
    eN = n.n(ev),
    ej = n(23339),
    eT = n(642846),
    eS = n(565645),
    ey = n(306417),
    eb = n(412136),
    eR = n(11057);
function ek() {
    return (0, s.jsx)("svg", {
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: eg.A.colors.INTERACTIVE_TEXT_DEFAULT.css,
        "aria-hidden": !0,
        children: (0, s.jsx)("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23ZM5.70711 9.29289C5.31658 8.90237 4.68342 8.90237 4.29289 9.29289C3.90237 9.68342 3.90237 10.3166 4.29289 10.7071L5.08579 11.5L4.29289 12.2929C3.90237 12.6834 3.90237 13.3166 4.29289 13.7071C4.68342 14.0976 5.31658 14.0976 5.70711 13.7071L6.5 12.9142L7.29289 13.7071C7.68342 14.0976 8.31658 14.0976 8.70711 13.7071C9.09763 13.3166 9.09763 12.6834 8.70711 12.2929L7.91421 11.5L8.70711 10.7071C9.09763 10.3166 9.09763 9.68342 8.70711 9.29289C8.31658 8.90237 7.68342 8.90237 7.29289 9.29289L6.5 10.0858L5.70711 9.29289ZM15.2929 9.29289C15.6834 8.90237 16.3166 8.90237 16.7071 9.29289L17.5 10.0858L18.2929 9.29289C18.6834 8.90237 19.3166 8.90237 19.7071 9.29289C20.0976 9.68342 20.0976 10.3166 19.7071 10.7071L18.9142 11.5L19.7071 12.2929C20.0976 12.6834 20.0976 13.3166 19.7071 13.7071C19.3166 14.0976 18.6834 14.0976 18.2929 13.7071L17.5 12.9142L16.7071 13.7071C16.3166 14.0976 15.6834 14.0976 15.2929 13.7071C14.9024 13.3166 14.9024 12.6834 15.2929 12.2929L16.0858 11.5L15.2929 10.7071C14.9024 10.3166 14.9024 9.68342 15.2929 9.29289ZM9.08869 17.5563C8.78148 18.0152 8.16038 18.1382 7.70142 17.831C7.24247 17.5238 7.11947 16.9027 7.42669 16.4437C8.41166 14.9723 10.092 14 11.9999 14C13.9078 14 15.5881 14.9723 16.5731 16.4437C16.8803 16.9027 16.7573 17.5238 16.2984 17.831C15.8394 18.1382 15.2183 18.0152 14.9111 17.5563C14.2815 16.6158 13.2124 16 11.9999 16C10.7874 16 9.71825 16.6158 9.08869 17.5563Z",
            fill: "currentColor",
        }),
    });
}
function eM(e) {
    let t,
        { hasNoVotes: n, victorEmoji: i } = e;
    if (n) t = (0, s.jsx)(ek, {});
    else if (null != i) {
        let e = "" !== i.name ? i.name : i.displayName;
        t = (0, s.jsx)(eS.A, { emojiId: i.id, emojiName: e, animated: i.animated });
    }
    return null != t ? (0, s.jsx)("div", { className: eR.ZS, children: t }) : null;
}
function eL(e) {
    let t,
        { type: n, ...i } = e,
        l = "text-muted";
    switch (n) {
        case "NO_VOTES":
            t = (0, s.jsx)(k.E, {
                variant: "text-sm/semibold",
                color: "text-default",
                scaleFontToUserSetting: !0,
                children: y.intl.string(y.t["a+lSZ/"]),
            });
            break;
        case "VICTOR":
            let { victorAnswerText: a, victorVotePercentage: r } = i;
            t = (0, s.jsxs)(s.Fragment, {
                children: [
                    (0, s.jsxs)("div", {
                        className: eR.sj,
                        children: [
                            (0, s.jsx)(k.E, {
                                variant: "text-sm/semibold",
                                color: "text-default",
                                className: eR.Dq,
                                scaleFontToUserSetting: !0,
                                children: a,
                            }),
                            (0, s.jsx)(ey.Vx, { size: 16, className: eR.To, isVictor: !0, isExpired: !0 }),
                        ],
                    }),
                    (0, s.jsxs)(k.E, {
                        variant: "text-xs/medium",
                        color: l,
                        scaleFontToUserSetting: !0,
                        children: [y.intl.string(y.t.ufIDIx), " \u2022 ", r, "%"],
                    }),
                ],
            });
            break;
        case "TIE":
            let { tiedVotePercentage: o } = i;
            t = (0, s.jsxs)(s.Fragment, {
                children: [
                    (0, s.jsx)(k.E, {
                        variant: "text-sm/semibold",
                        color: "text-default",
                        scaleFontToUserSetting: !0,
                        children: y.intl.string(y.t.kPN9si),
                    }),
                    (0, s.jsxs)(k.E, {
                        variant: "text-xs/medium",
                        color: l,
                        scaleFontToUserSetting: !0,
                        children: [o, "%"],
                    }),
                ],
            });
    }
    return (0, s.jsx)("div", { className: eR.h_, children: t });
}
function eO(e) {
    let { className: t, data: n, onClickPollLink: i } = e,
        l = a.useMemo(
            () =>
                (function (e) {
                    if (0 === e.totalVotes) return { type: "NO_VOTES" };
                    let t = null != e.victorAnswerId,
                        n = e.totalVotes > 0 ? Math.round((e.victorAnswerVotes / e.totalVotes) * 100) : 0;
                    return t
                        ? { type: "VICTOR", victorAnswerText: e.victorAnswerText, victorVotePercentage: n }
                        : { type: "TIE", tiedVotePercentage: n };
                })(n),
            [n],
        ),
        r = null != n.victorEmoji || "NO_VOTES" === l.type;
    return (0, s.jsxs)("div", {
        className: eN()(eR.kL, { [eR.FS]: r }, t),
        children: [
            (0, s.jsx)(eM, { hasNoVotes: "NO_VOTES" === l.type, victorEmoji: n.victorEmoji }),
            (0, s.jsx)(eL, { ...l }),
            null != i &&
                (0, s.jsx)(u.$, { size: "sm", onClick: i, variant: "secondary", text: y.intl.string(y.t.Jw7Vbf) }),
        ],
    });
}
var eP = n(435558),
    eD = n(403581),
    eU = n(331322),
    eG = n(508770),
    ew = n(863574),
    eH = n(811656),
    eB = n(166403),
    eF = n(625494),
    eV = n(38405),
    ez = n(427262),
    eJ = n(573359),
    eK = n(59784),
    eY = n(989790),
    eW = n(88001),
    eX = n(148155),
    eZ = n(387993),
    eq = n(421438);
function eQ(e) {
    let { disabled: t, invite: i, isExistingSub: l } = e;
    return (0, s.jsx)(u.$, {
        variant: "expressive",
        size: "md",
        text: y.intl.string(eX.default.rjuKse),
        icon: eD.t,
        onClick: function () {
            if (null == i) return;
            let e = i.subscription,
                t = i.id,
                a = T.default.getUser(i.primary_user);
            if (null == a) return;
            let r = (0, ez.$3)(a);
            W.default.track(D.HAw.PREMIUM_GROUP_INVITE_EMBED_ACCEPT_CLICKED, { invite_id: t, subscription_id: e });
            let o = (0, eP.uniqueId)("premium-group-accept-invite-modal"),
                d = !1;
            (0, c.openModalLazy)(
                async () => {
                    let { default: i } = await Promise.all([n.e("56498"), n.e("399910")]).then(n.bind(n, 826181));
                    return (n) =>
                        (0, s.jsx)(i, {
                            ...n,
                            premiumGroupSubscriptionId: e,
                            premiumGroupInviteId: t,
                            premiumGroupPrimaryName: r,
                            isExistingSub: l,
                            onClose: async () => {
                                d ||
                                    ((d = !0),
                                    eF._.dispatch(D.jej.WOW_MOMENT_CONFIRMATION_MODAL_CLOSED),
                                    eJ.A.isDisplayingWowMomentConfirmation && eJ.A.isAnimated
                                        ? setTimeout(() => {
                                              n.onClose();
                                          }, eH.K)
                                        : await n.onClose());
                            },
                        });
                },
                {
                    onCloseRequest: () => {
                        d ||
                            ((d = !0),
                            eF._.dispatch(D.jej.WOW_MOMENT_CONFIRMATION_MODAL_CLOSED),
                            eJ.A.isDisplayingWowMomentConfirmation && eJ.A.isAnimated
                                ? setTimeout(() => {
                                      (0, c.closeModal)(o);
                                  }, eH.K)
                                : (0, c.closeModal)(o));
                    },
                    modalKey: o,
                },
            );
        },
        disabled: t,
    });
}
function e$(e) {
    let { disabled: t, invite: i, channel: l } = e;
    return (0, s.jsx)(u.$, {
        variant: "secondary",
        size: "md",
        text: y.intl.string(eX.default["eYHh+z"]),
        onClick: function () {
            if (null == i || !l.isDM())
                return void eV.A.captureMessage("CancelInviteButton onClick: unexpected state", {
                    extra: {
                        inviteIsNull: null == i,
                        channelIsDM: l.isDM(),
                        channelId: l.id,
                        subscriptionGroupMemberId: i?.id,
                        subscriptionId: i?.subscription,
                        primaryUserId: i?.primary_user,
                    },
                });
            let e = l.getRecipientId(),
                t = T.default.getUser(e);
            null != t &&
                (W.default.track(D.HAw.PREMIUM_GROUP_INVITE_EMBED_CANCEL_CLICKED, {
                    invite_id: i.id,
                    subscription_id: i.subscription,
                    invited_user_id: e,
                }),
                (0, c.openModalLazy)(async () => {
                    let { default: e } = await n.e("815554").then(n.bind(n, 115225));
                    return (n) =>
                        (0, s.jsx)(e, {
                            ...n,
                            subscriptionId: i.subscription,
                            invitedUser: t,
                            subscriptionGroupMemberId: i.id,
                        });
                }));
        },
        disabled: t,
    });
}
function e0(e) {
    let { message: t, header: n, body: i, compact: l, actionButton: a } = e;
    return (0, s.jsxs)(_.A, {
        className: eZ.og,
        compact: l,
        iconNode: (0, s.jsx)(eD.t, { size: "md", color: eg.A.colors.ICON_STRONG }),
        children: [
            (0, s.jsx)(k.E, { variant: "text-md/medium", color: "text-strong", children: t }),
            (0, s.jsxs)(eU.B, {
                direction: "horizontal",
                className: eZ.x,
                children: [
                    (0, s.jsx)("img", { src: eq, alt: "", className: eZ.Sl }),
                    (0, s.jsxs)("div", {
                        className: eZ.Qs,
                        children: [
                            (0, s.jsx)(eG.E, { type: "beta", variant: "expressive" }),
                            (0, s.jsx)("h2", { className: eZ.DD, children: n }),
                            (0, s.jsx)(k.E, { variant: "text-md/medium", color: "text-subtle", children: i }),
                            null != a && (0, s.jsx)("div", { className: eZ.UD, children: a }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
let e1 = function (e) {
    let { message: t, channel: n, compact: i } = e,
        l = t.premiumGroupInviteId,
        {
            inviteState: a,
            isFetching: r,
            invite: o,
            currentUser: c,
            premiumSubscription: u,
        } = (0, d.cf)(
            [eK.A, T.default, eB.A],
            () => ({
                inviteState: null != l ? eK.A.getInviteState(l) : eW.xI.NOT_FOUND,
                isFetching: null != l && eK.A.isFetching(l),
                invite: null != l ? eK.A.getInvite(l)?.invite : null,
                currentUser: T.default.getCurrentUser(),
                premiumSubscription: eB.A.getPremiumSubscription(),
            }),
            [l],
        );
    if (null == c) return null;
    let m = t.author,
        h = c.id === m.id;
    if (r || a === eW.xI.FETCHING || a === eW.xI.UNKNOWN) return (0, s.jsx)(ew.Wb, { isHorizontal: !0 });
    let g = (0, eY.o1)({ sender: m, channel: n, isSender: h, inviteState: a });
    if (null == g) return null;
    let p = a === eW.xI.PENDING,
        A = null;
    return (
        (A = h
            ? p
                ? (0, s.jsx)(e$, { disabled: !1, invite: o, channel: n })
                : a === eW.xI.REMOVED
                  ? (0, s.jsx)(e$, { disabled: !0, invite: o, channel: n })
                  : null
            : (0, s.jsx)(eQ, { disabled: !p, invite: o, isExistingSub: null != u })),
        (0, s.jsx)(e0, { message: g.message, header: g.header, body: g.body, compact: i, actionButton: A })
    );
};
var e2 = n(536637),
    e3 = n.n(e2),
    e5 = n(607399),
    e6 = n(144165),
    e7 = n(297264),
    e9 = n(75678),
    e8 = n(58703),
    e4 = n(975571),
    te = n(158045),
    tt = n(851746),
    tn = n(727949),
    ti = n(664654),
    tl = n(212737),
    ts = n(465794),
    ta = n(378135),
    tr = n(202541),
    to = n(953081),
    td = n(954457);
class tc extends a.Component {
    trialOffer;
    referralsSent;
    currentUser;
    recipientHasNitro;
    trialEndsAt;
    analyticsLocations;
    offerExpired;
    isSender;
    compact;
    constructor(e) {
        (super(e),
            (this.trialOffer = e.trialOffer),
            (this.referralsSent = e.referralsSent),
            (this.currentUser = e.currentUser),
            (this.recipientHasNitro = e.recipientHasNitro),
            (this.trialEndsAt = e.trialEndsAt),
            (this.analyticsLocations = e.analyticsLocations),
            (this.compact = !0 === e.compact),
            (this.offerExpired = (0, ta.P)(this.trialOffer)),
            (this.isSender = this.currentUser.id === this.trialOffer.referrerId));
    }
    getSystemMessageHeader() {
        let e = T.default.getUser(this.trialOffer.userId);
        if (this.isSender) return y.intl.format(y.t["4/EMxl"], { receiver: e?.username });
        let t = T.default.getUser(this.trialOffer.referrerId),
            n = t?.username !== void 0 ? t.username : "";
        return y.intl.format(y.t.yisueA, { sender: n, helpdeskArticle: e4.A.getArticleURL(D.MVz.REFERRAL_PROGRAM) });
    }
    getTitleText() {
        let e = T.default.getUser(this.trialOffer.userId),
            t = null != e ? e.username : "???",
            n = T.default.getUser(this.trialOffer.referrerId),
            i = null != n ? n.username : "???";
        return this.recipientHasNitro && !this.trialOffer.isRedeemed
            ? y.intl.formatToPlainString(y.t["Mptau/"], { username: t })
            : this.offerExpired
              ? this.isSender
                  ? y.intl.string(y.t["9SNdf4"])
                  : y.intl.formatToPlainString(y.t["H0+MxK"], { userName: i })
              : y.intl.formatToPlainString(y.t.IiWKwg, { senderUserName: i, recipientUserName: t });
    }
    getBodyText() {
        return !this.recipientHasNitro || this.isSender || this.trialOffer.isRedeemed
            ? this.offerExpired
                ? null
                : y.intl.string(y.t.lQLlOb)
            : y.intl.format(y.t.LwCwT9, { helpdeskArticle: e4.A.getArticleURL(D.MVz.REFERRAL_PROGRAM) });
    }
    renderActions() {
        let e =
                this.currentUser.id !== this.trialOffer.userId ||
                (0, te.TW)(this.currentUser) ||
                !this.currentUser.verified ||
                (0, ta.P)(this.trialOffer),
            t = this.renderExpirationDate();
        return (0, s.jsxs)("div", {
            className: to.UD,
            children: [
                (0, s.jsx)("div", {
                    children: (0, s.jsx)(u.$, {
                        variant: "primary",
                        disabled: e,
                        size: "sm",
                        text: y.intl.string(y.t.O0etsF),
                        onClick: () => {
                            (0, e9.A)({
                                initialPlanId: null,
                                subscriptionTier: tr.pe.TIER_2,
                                analyticsLocations: this.analyticsLocations,
                                trialId: this.trialOffer.trialId,
                                referralTrialOfferId: this.trialOffer.id,
                            });
                        },
                    }),
                }),
                (0, s.jsx)(k.E, { variant: "text-xs/semibold", color: "none", className: to.yu, children: t }),
            ],
        });
    }
    renderExpirationDate() {
        let { trialOffer: e, trialEndsAt: t } = this.props;
        if (e.isRedeemed && !this.isSender && null !== t)
            return y.intl.formatToPlainString(y.t.nP0ivR, { date: (0, e8.i$)(e3()(t), "LL") });
        if (this.recipientHasNitro || null == e.expiresAt) return null;
        let n = e3()(e.expiresAt);
        return this.offerExpired
            ? y.intl.formatToPlainString(y.t.PuSHfU, { date: (0, e8.i$)(e3()(n), "LL") })
            : (0, tn.GQ)(n.valueOf());
    }
    renderMedia() {
        return (0, s.jsx)("div", { className: to.Qj });
    }
    render() {
        let e = () => {
                let e = T.default.getUser(this.trialOffer.userId),
                    t = null != e ? e.username : "???",
                    n = T.default.getUser(this.trialOffer.referrerId),
                    i = null != n ? n.username : "???";
                if (this.isSender)
                    if (this.recipientHasNitro && !this.trialOffer.isRedeemed)
                        return {
                            headerText: y.intl.formatToPlainString(y.t.qABVhL, { recipient: t }),
                            bodyText: y.intl.formatToPlainString(y.t.u7hyDx, {
                                helpdeskArticle: e4.A.getArticleURL(D.MVz.REFERRAL_PROGRAM),
                            }),
                        };
                    else
                        return {
                            headerText: y.intl.string(y.t.LAGZfq),
                            bodyText: y.intl.formatToPlainString(y.t["0gnFLC"], { recipient: t }),
                        };
                return this.offerExpired
                    ? {
                          headerText: y.intl.string(y.t.nYvpUl),
                          bodyText: y.intl.formatToPlainString(y.t.wJdBEZ, { sender: i }),
                      }
                    : {
                          headerText: y.intl.string(y.t.HtTvXA),
                          bodyText: y.intl.formatToPlainString(y.t.wOQByA, { sender: i }),
                      };
            },
            t = (0, s.jsxs)(s.Fragment, {
                children: [
                    (0, s.jsx)(ts.A, {
                        disabled: this.offerExpired,
                        subscriptionTier: tr.pe.TIER_2,
                        buttonTextOverride: y.intl.string(y.t.O0etsF),
                        size: "md",
                        variantOverride: "expressive",
                    }),
                    (0, s.jsx)(k.E, {
                        variant: "text-md/medium",
                        color: "text-subtle",
                        children: this.renderExpirationDate(),
                    }),
                ],
            }),
            i = (0, s.jsx)(u.$, {
                variant: "primary",
                disabled: !1,
                size: "md",
                onClick: () =>
                    (function (e) {
                        let { analyticsLocations: t, startingScreen: i } = e;
                        (W.default.track(D.HAw.REFERRAL_PROGRAM_SHARE_MODAL_CTA_CLICKED, { location_stack: t }),
                            (0, c.openModalLazy)(async () => {
                                let { default: e } = await Promise.resolve().then(n.bind(n, 212737));
                                return (t) => (0, s.jsx)(e, { ...t, startingScreen: i });
                            }));
                    })({
                        analyticsLocations: [],
                        startingScreen:
                            this.referralsSent.size === ti.Z
                                ? tl.SelectFriendsModalScreens.REMINDER
                                : tl.SelectFriendsModalScreens.SELECT_FRIENDS,
                    }),
                text: y.intl.string(y.t.Lm2nFc),
            }),
            l = this.isSender ? i : t,
            a = (0, s.jsx)(e6._, { src: td.A, height: 84, width: 144, className: to.ms }),
            { headerText: r, bodyText: o } = e();
        return (0, s.jsxs)(_.A, {
            className: to.SB,
            iconNode: (0, s.jsx)(eD.t, { size: "md", color: eg.A.colors.ICON_STRONG }),
            iconContainerClassName: to.J5,
            compact: this.compact,
            children: [
                (0, s.jsx)(k.E, {
                    variant: "text-md/medium",
                    color: "text-strong",
                    children: this.getSystemMessageHeader(),
                }),
                (0, s.jsxs)("div", {
                    className: to.i2,
                    children: [
                        a,
                        (0, s.jsxs)("div", {
                            className: to.KX,
                            children: [
                                (0, s.jsxs)("div", {
                                    className: to.xJ,
                                    children: [
                                        (0, s.jsx)(e7.D, {
                                            variant: "heading-md/semibold",
                                            color: "text-strong",
                                            children: r,
                                        }),
                                        (0, s.jsx)(k.E, {
                                            variant: "text-md/medium",
                                            color: "text-subtle",
                                            children: o,
                                        }),
                                    ],
                                }),
                                (0, s.jsx)("div", { className: to.ox, children: l }),
                            ],
                        }),
                    ],
                }),
            ],
        });
    }
}
function tu(e) {
    let { userTrialOfferId: t, canRenderReferralEmbed: n, compact: i } = e,
        {
            trialOffer: l,
            isResolving: a,
            referralsSent: r,
        } = (0, d.cf)(
            [tt.A],
            () => ({
                trialOffer: n ? tt.A.getRelevantUserTrialOffer(t) : null,
                isResolving: !!n && tt.A.isResolving(t),
                referralsSent: tt.A.getRecipientStatus(),
            }),
            [n, t],
        ),
        o = T.default.getCurrentUser(),
        c = (0, d.bG)(
            [T.default],
            () => null != l && (0, te.TW)(void 0 !== o && l.userId === o.id ? o : T.default.getUser(l.userId)),
        ),
        u = (0, d.bG)([eB.A], () => (c ? eB.A.getPremiumTypeSubscription()?.trialEndsAt : null)),
        { analyticsLocations: m } = (0, B.Ay)(H.A.SHARE_NITRO_EMBED);
    return a
        ? (0, s.jsx)(ew.Wb, { isHorizontal: !e5.Fr })
        : n && null != l && void 0 !== o
          ? (0, s.jsx)(tc, {
                trialOffer: l,
                referralsSent: r,
                currentUser: o,
                recipientHasNitro: c,
                trialEndsAt: u,
                analyticsLocations: m,
                compact: i,
            })
          : (0, s.jsx)("div", { className: to.TU, children: (0, s.jsx)("div", { className: to.Gq }) });
}
var tm = n(638916),
    th = n(834516),
    tg = n(28863),
    tp = n(342296),
    tA = n(486020),
    tx = n(552691);
function tf(e, t) {
    let n = a.useRef(null);
    return a.useCallback(
        (i) => (l, a) => {
            let r = tA.Ay.getApplicationIconURL({ id: i.id, icon: i.icon, bot: i.bot, botIconFirst: !0 }),
                { bot: o } = i;
            return null == o
                ? l
                : (0, s.jsx)(
                      tp.A,
                      {
                          targetElementRef: n,
                          userId: o.id,
                          avatarUrl: r,
                          guildId: e.guild_id,
                          channelId: e.id,
                          messageId: t.id,
                          clickTrap: !0,
                          children: (e) => (0, s.jsx)(tg.Anchor, { ...e, ref: n, children: l }),
                      },
                      a,
                  );
        },
        [e, t.id],
    );
}
var tE = n(448761),
    tI = n(215026),
    tC = n(905499),
    t_ = n(60270),
    tv = n(241326),
    tN = n(478016),
    tj = n(39470);
let tT = {
        [tE.l.REPORT_TO_MOD_BAN_USER]: () => tj.default.komFTv,
        [tE.l.REPORT_TO_MOD_KICK_USER]: () => tj.default.FAJmJV,
        [tE.l.REPORT_TO_MOD_TIMEOUT_USER]: () => tj.default["90r/sR"],
    },
    tS = {
        [tE.l.REPORT_TO_MOD_DELETED_MESSAGE]: () => tj.default["4023i8"],
        [tE.l.REPORT_TO_MOD_CLOSED_REPORT]: () => tj.default.UE81zV,
    };
function ty(e) {
    let { type: t } = e,
        n = null;
    switch (t) {
        case tE.l.REPORT_TO_MOD_BAN_USER:
            n = tI.w;
            break;
        case tE.l.REPORT_TO_MOD_KICK_USER:
            n = tC.N;
            break;
        case tE.l.REPORT_TO_MOD_TIMEOUT_USER:
            n = t_.g;
            break;
        case tE.l.REPORT_TO_MOD_DELETED_MESSAGE:
            n = tv.TrashIcon;
            break;
        case tE.l.REPORT_TO_MOD_CLOSED_REPORT:
            n = tN.U;
    }
    return null != n ? (0, s.jsx)(n, { size: "refresh_sm", color: "currentColor" }) : null;
}
function tb(e) {
    let { message: t, channel: n, compact: i } = e,
        { author: l, mentions: a, type: r } = t,
        o = (0, L.Ay)(t),
        c = t.getChannelId(),
        u = (0, d.bG)([T.default], () => T.default.getUser(a[0]), [a]),
        m = (0, L.m2)(l, n),
        h = (0, C.P)({ user: l, channelId: c, guildId: n.guild_id, messageId: t.id })(m),
        g = (0, L.d8)(u, n),
        p = (0, C.P)({ user: u, channelId: c, guildId: n.guild_id, messageId: t.id })(g),
        A = tT[r] ?? null;
    if (null == A) return null;
    let x = y.intl.format(A(), { actorName: o.nick, actorHook: h, targetName: g?.nick, targetHook: p });
    return (0, s.jsx)(_.A, { iconNode: (0, s.jsx)(ty, { type: r }), timestamp: t.timestamp, compact: i, children: x });
}
function tR(e) {
    let { message: t, channel: n, compact: i } = e,
        { author: l, type: a } = t,
        r = (0, L.Ay)(t),
        o = t.getChannelId(),
        d = (0, L.m2)(l, n),
        c = (0, C.P)({ user: l, channelId: o, guildId: n.guild_id, messageId: t.id })(d),
        u = tS[a] ?? null;
    if (null == u) return null;
    let m = y.intl.format(u(), { actorName: r.nick, actorHook: c });
    return (0, s.jsx)(_.A, { iconNode: (0, s.jsx)(ty, { type: a }), timestamp: t.timestamp, compact: i, children: m });
}
function tk(e) {
    let { message: t, channel: n, compact: i } = e,
        { type: l } = t;
    return l === tE.l.REPORT_TO_MOD_BAN_USER ||
        l === tE.l.REPORT_TO_MOD_KICK_USER ||
        l === tE.l.REPORT_TO_MOD_TIMEOUT_USER
        ? (0, s.jsx)(tb, { message: t, channel: n, compact: i })
        : (0, s.jsx)(tR, { message: t, channel: n, compact: i });
}
var tM = n(849736),
    tL = n(63995),
    tO = n(105530),
    tP = n(353202),
    tD = n(747926);
let tU = [
    { id: "749054660769218631", format_type: 3, description: "Wumpus waves hello", name: "Wave" },
    {
        id: "751606379340365864",
        format_type: 3,
        description: "Nelly peeks around a wall and waves hello",
        name: "Wave",
    },
    { id: "754108890559283200", format_type: 3, description: "Clyde cheerfully waving", name: "Wave" },
    { id: "781291131828699156", format_type: 2, description: "Choco waves in greeting", name: "Wave" },
    { id: "816087792291282944", format_type: 3, description: "Doggo spins and greets you", name: "Sup" },
    { id: "819128604311027752", format_type: 3, description: "Peach raising her arms in distress", name: "Scream" },
];
var tG = n(179847);
function tw(e) {
    var t;
    let n,
        i,
        { channel: l, message: r } = e,
        o =
            ((t = r.id),
            (i =
                ((null != (n = T.default.getCurrentUser()?.id) ? X.default.extractTimestamp(n) : 0) +
                    X.default.extractTimestamp(t)) %
                tU.length),
            tU[i]),
        d = a.useCallback(() => {
            (0, Z.i)({ type: z.oU.FORM, content: "", channel: l }).then((e) => {
                let { valid: t } = e;
                if (t) {
                    var n;
                    ((n = o.id),
                        g.A.sendGreetMessage(
                            l.id,
                            n,
                            g.A.getSendMessageOptionsForReply({
                                channel: l,
                                message: r,
                                shouldMention: !0,
                                showMentionToggle: !0,
                            }),
                        ),
                        W.default.track(D.HAw.WELCOME_CTA_CLICKED, {
                            is_reply: !0,
                            sticker_id: n,
                            target_user: r.author.id,
                            sender: T.default.getCurrentUser()?.id,
                        }));
                }
            });
        }, [l, r, o]);
    return (0, s.jsx)("div", {
        className: tG.T,
        children: (0, s.jsx)(u.$, {
            icon: { type: "sticker", asset: o, component: J.A },
            text: y.intl.string(y.t["7Tj6HT"]),
            onClick: d,
            variant: "secondary",
        }),
    });
}
function tH(e) {
    let { message: t, channel: n } = e,
        i = n.getGuildId(),
        l = (0, d.bG)([T.default, Y.A, et.A, j.Ay], () => {
            let e = T.default.getCurrentUser(),
                l = (0, K.UJ)(n),
                s = Y.A.can(D.xBc.SEND_MESSAGES, n),
                a = null != i && null != e && j.Ay.getMember(i, e.id)?.isPending,
                r = t.author.bot,
                o = et.A.getGuild(i),
                d = null != o && (o.systemChannelFlags & D.ogj.SUPPRESS_JOIN_NOTIFICATION_REPLIES) == 0;
            return s && !l && !a && !r && d;
        });
    return null != i && l ? (0, s.jsx)(tw, { message: t, channel: n }) : null;
}
var tB = n(470710),
    tF = n(734057),
    tV = n(290863),
    tz = n(309010),
    tJ = n(977997),
    tK = n(562153),
    tY = n(521981),
    tW = n(782603),
    tX = n(562708),
    tZ = n(778712),
    tq = n(214947),
    tQ = n(597770),
    t$ = n(966327),
    t0 = n(139286),
    t1 = n(427358),
    t2 = n(242874),
    t3 = n(507104),
    t5 = n(51501),
    t6 = n(788833),
    t7 = n(690802);
let t9 = (0, tZ.FT)(tZ._3.SIZE_56),
    t8 = (0, tZ.FT)(tZ._3.SIZE_24);
function t4(e) {
    let { user: t, ariaLabel: n, showCutout: i } = e,
        l = a.useId(),
        r = "u" > typeof document && document.documentElement?.dir === "rtl" ? -2 : t9 - t8 - -2,
        o = t9 - t8 - -3;
    return (0, s.jsxs)("svg", {
        width: t9,
        height: t9,
        viewBox: `0 0 ${t9} ${t9}`,
        className: t7.XH,
        children: [
            i &&
                (0, s.jsxs)("mask", {
                    id: l,
                    maskUnits: "userSpaceOnUse",
                    children: [
                        (0, s.jsx)("rect", { x: 0, y: 0, width: t9, height: t9, fill: "white" }),
                        (0, s.jsx)("circle", { cx: r + t8 / 2, cy: o + t8 / 2, r: t8 / 2 + 2, fill: "black" }),
                    ],
                }),
            (0, s.jsx)("foreignObject", {
                x: 0,
                y: 0,
                width: t9,
                height: t9,
                mask: i ? `url(#${l})` : void 0,
                children: (0, s.jsx)(t$.A, { className: t7.A6, user: t, "aria-label": n, size: tZ._3.SIZE_56 }),
            }),
        ],
    });
}
function ne(e) {
    let { giftIntentType: t, recipientUser: i, analyticsPage: l, analyticsSection: r, innerRef: o } = e,
        m = (0, d.bG)([T.default], () => T.default.getCurrentUser()),
        { analyticsLocations: h } = (0, B.Ay)(H.A.PREMIUM_GIFT_INTENT_CARD),
        g = (0, d.bG)([t3.Ay], () => t3.Ay.getFriendAnniversaryYears(i.id)),
        p = (0, t5.$u)(t),
        { openGiftModal: A } = (0, t6.$)({
            giftRecipient: i,
            analyticsLocations: h,
            analyticsLocation: p.chat,
            analyticsObject: { page: l, section: r, object: D.ZSU.BUTTON_CTA, objectType: D.AnalyticsObjectTypes.GIFT },
            location: "gift-intent-card",
        });
    function x() {
        switch (t) {
            case tr.np.FRIEND_ANNIVERSARY:
                return y.intl.string(y.t.ilhtIa);
            case tr.np.UNSPECIFIED:
                return;
            default:
                return (0, t2.yE)(t);
        }
    }
    return (
        a.useEffect(() => {
            (0, t0.x)({
                name: tX.ImpressionNames.GIFT_INTENT_CARD,
                type: tX.ImpressionTypes.VIEW,
                properties: { gift_intent_type: t, num_friend_anniversaries: t3.Ay.getFriendAnniversaries().length },
            });
        }, [t]),
        (0, s.jsx)("div", {
            ref: o,
            className: t7.Qs,
            children: (0, s.jsxs)("div", {
                className: t7.gx,
                children: [
                    (0, s.jsxs)("div", {
                        className: t7.ou,
                        children: [
                            (0, s.jsxs)("div", {
                                className: t7.HD,
                                children: [
                                    (0, s.jsx)(t4, { user: i, ariaLabel: i.username, showCutout: null != m }),
                                    null != m &&
                                        (0, s.jsx)(t$.A, {
                                            className: t7.GM,
                                            user: m,
                                            "aria-label": i.username,
                                            size: tZ._3.SIZE_24,
                                        }),
                                ],
                            }),
                            (0, s.jsxs)("div", {
                                className: t7.FS,
                                children: [
                                    (0, s.jsx)(k.E, {
                                        variant: "text-md/medium",
                                        color: "text-strong",
                                        lineClamp: 3,
                                        children: (function () {
                                            switch (t) {
                                                case tr.np.FRIEND_ANNIVERSARY:
                                                    return y.intl.string(y.t.CeQIwZ);
                                                case tr.np.UNSPECIFIED:
                                                    return;
                                                default:
                                                    return (0, t2.yE)(t);
                                            }
                                        })(),
                                    }),
                                    (0, s.jsxs)("div", {
                                        className: t7.jA,
                                        children: [
                                            (0, s.jsx)(tq.$, { size: "xs" }),
                                            (0, s.jsx)(k.E, {
                                                className: t7.Tm,
                                                variant: "text-md/normal",
                                                color: "text-subtle",
                                                lineClamp: 1,
                                                children: (function () {
                                                    switch (t) {
                                                        case tr.np.FRIEND_ANNIVERSARY:
                                                            return y.intl.formatToPlainString(y.t.PpG27s, {
                                                                numberOfYears: g,
                                                            });
                                                        case tr.np.UNSPECIFIED:
                                                            return;
                                                        default:
                                                            return (0, t2.yE)(t);
                                                    }
                                                })(),
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                        ],
                    }),
                    (0, s.jsxs)("div", {
                        className: t7.UD,
                        children: [
                            (0, s.jsx)(u.$, {
                                size: "sm",
                                variant: "secondary",
                                text: y.intl.string(y.t.nffuyb),
                                "aria-label": y.intl.string(y.t.nffuyb),
                                onClick: (e) => {
                                    (e.stopPropagation(),
                                        W.default.track(D.HAw.GIFT_INTENT_CARD_SECONDARY_CTA_CLICKED, {
                                            gift_intent_type: t,
                                            cta_type: "send_message",
                                            location_stack: h,
                                        }),
                                        (0, c.openModalLazy)(async () => {
                                            let { default: e } = await Promise.all([n.e("780509"), n.e("695501")]).then(
                                                n.bind(n, 367516),
                                            );
                                            return (n) =>
                                                (0, s.jsx)(e, {
                                                    ...n,
                                                    giftIntentType: t,
                                                    analyticsLocationHistory: h,
                                                    recipient: i,
                                                });
                                        }));
                                },
                            }),
                            (0, s.jsx)(u.$, {
                                size: "sm",
                                variant: "expressive",
                                text: x(),
                                icon: tQ.GiftIcon,
                                "aria-label": x(),
                                onClick: function (e) {
                                    e.stopPropagation();
                                    let n = t1.A.getUserAffinity(i.id);
                                    (W.default.track(D.HAw.GIFT_INTENT_ACTION_BUTTON_CLICKED, {
                                        gift_intent_type: t,
                                        affinity: n?.dmProbability,
                                        location_stack: h,
                                    }),
                                        A());
                                },
                            }),
                        ],
                    }),
                ],
            }),
        })
    );
}
var nt = n(147036),
    nn = n(36889);
function ni(e) {
    let { giftIntentType: t, recipientUser: n, channel: i } = e;
    return (0, s.jsx)(_.A, {
        contentClassName: nn.o9,
        iconContainerClassName: nn.zc,
        iconNode: (0, s.jsx)(tW.BellIcon, { colorClass: nn.Kk }),
        children: (0, s.jsx)(ne, {
            giftIntentType: t,
            recipientUser: n,
            analyticsPage: (0, nt.DJ)(i),
            analyticsSection: D.JJy.CHANNEL,
        }),
    });
}
var nl = n(438729),
    ns = n(862482),
    na = n(725807),
    nr = n(900443);
function no(e) {
    let { message: t, channel: n } = e,
        i = null != n.guild_id ? D.JJy.TEXT_IN_VOICE : D.JJy.CHANNEL_TEXT_AREA;
    return (0, s.jsx)(_.A, {
        contentClassName: nr.o9,
        iconContainerClassName: nr.zc,
        iconNode: (0, s.jsx)(tW.BellIcon, { colorClass: nr.Kk }),
        children: (0, s.jsxs)("div", {
            className: nr.kL,
            children: [
                (0, s.jsxs)("div", {
                    children: [
                        (0, s.jsx)(k.E, { variant: "text-sm/medium", children: t.content }),
                        (0, s.jsxs)("div", {
                            className: nr.C5,
                            children: [
                                (0, s.jsx)(eD.t, { size: "xs", colorClass: nr.bu }),
                                (0, s.jsx)(k.E, {
                                    variant: "text-xs/medium",
                                    className: nr.vp,
                                    children: y.intl.string(y.t["BMw+7I"]),
                                }),
                            ],
                        }),
                    ],
                }),
                (0, s.jsx)("div", {
                    className: nr.UD,
                    children: (0, s.jsx)(na.A, {
                        showGradient: !0,
                        iconClassName: nr.PC,
                        subscriptionTier: tr.pe.TIER_2,
                        textOptions: { textOverride: y.intl.string(y.t.Y2WKTl) },
                        size: ns.$n.Sizes.SMALL,
                        premiumModalAnalyticsLocation: { section: i, object: D.ZSU.MESSAGE },
                    }),
                }),
            ],
        }),
    });
}
var nd = n(837381),
    nc = n(933832),
    nu = n(138134),
    nm = n(866665),
    nh = n(231483),
    ng = n(123292),
    np = n(709066),
    nA = n(845625),
    nx = n(449585),
    nf = n(995786),
    nE = n(741231),
    nI = n(589022),
    nC = n(367513),
    n_ = n(47167),
    nv = n(332173),
    nN = n(95701),
    nj = n(994500),
    nT = n(449054);
function nS(e) {
    let { channel: t, onClick: n, beforeTransition: i, className: l, openChatWithoutConnecting: a } = e,
        r = (0, d.bG)([T.default, nj.A], () => (null == t ? "" : (0, n_.m1)(t, T.default, nj.A)), [t]);
    return (0, s.jsx)(nm.m, {
        "data-pending-richtooltip-migration": !0,
        __unsupportedReactNodeAsText: r,
        position: "top",
        children: (0, s.jsx)(nv.A, {
            role: "link",
            className: l,
            onClick: (e) => {
                (e.stopPropagation(),
                    null != n
                        ? n()
                        : (null != i && i(),
                          (0, c.closeAllModals)(),
                          (function (e, t) {
                              let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                              if (null == e || null == t) return;
                              let i = et.A.getGuild(e);
                              if (i?.joinedAt == null) return nT.Z2(e, {}, { channelId: t });
                              let l = tF.A.getChannel(t);
                              if (null != l && (0, nN.ay)(l.type)) {
                                  if (n) {
                                      (nC.A.updateChatOpen(l.id, !0), (0, v.pX)(D.BVt.CHANNEL(e, t)));
                                      return;
                                  }
                                  p.default.selectVoiceChannel(l.id);
                                  return;
                              }
                              (0, v.pX)(D.BVt.CHANNEL(e, t));
                          })(t?.guild_id, t?.id, a)));
            },
            iconType: (0, nt.QG)(t),
            children: r,
        }),
    });
}
var ny = n(491182),
    nb = n(622868),
    nR = n(868892);
function nk(e) {
    let {
            message: t,
            channel: n,
            content: i,
            className: l,
            compact: a,
            popoutProps: r,
            hideTimestamp: o = !1,
            withFooter: d = !1,
            ...c
        } = e,
        u = (0, L.Ay)(t);
    return (0, s.jsx)("div", {
        className: eN()({ [nR.Ym]: d }, nR.gD, { [nR.oE]: a }, l),
        children: (0, s.jsx)(ny.A, {
            ...c,
            className: eN()(nR.zC, { [nR.oE]: a }),
            childrenMessageContent: (0, s.jsx)(nl.Ay, {
                className: eN()(nR.__invalid_messageContent, { [nR.oE]: a }),
                message: t,
                content: i,
                compact: a ?? !1,
            }),
            childrenHeader: (0, s.jsx)(nb.Ay, {
                message: t,
                channel: n,
                author: u,
                guildId: n?.guild_id,
                compact: a,
                hideTimestamp: o,
                className: eN()(nR.wx, { [nR.oE]: a }),
                ...(r ?? {}),
            }),
            compact: a,
            author: u,
        }),
    });
}
var nM = n(10364),
    nL = n(837528),
    nO = n(754459),
    nP = n(97808),
    nD = n(3451),
    nU = n(19575),
    nG = n(6829);
let nw = nU.Ay.getEnableHardwareAcceleration() ? nP.Js : nP.eu;
function nH() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        [t, n] = a.useState(!1),
        i = (0, d.bG)([M.Ay], () => M.Ay.useReducedMotion),
        l = a.useMemo(() => {
            let n = t || (!i && !e);
            return (0, nD.q)(n);
        }, [t, i, e]);
    return {
        avatarSrc: l,
        eventHandlers: { onMouseEnter: a.useCallback(() => n(!0), []), onMouseLeave: a.useCallback(() => n(!1), []) },
    };
}
function nB(e) {
    let { src: t } = e;
    return (0, s.jsx)("div", {
        className: nG.H,
        children: (0, s.jsx)(nw, { src: t, size: tZ._3.SIZE_40, "aria-label": y.intl.string(y.t.hG1StD) }),
    });
}
var nF = n(381941),
    nV = n(705751),
    nz = n(200700);
function nJ(e, t) {
    let { popouts: n, selected: i, setPopout: l } = (0, nO.A)(e.id, nF.Fd),
        { usernameProfile: s, avatarProfile: r } = n,
        o = (0, nL.r4)(e.author.id, t.id),
        d = (0, nL.UY)(e.author.id, t.id, e.id),
        c = (0, nL.m)(e, t, s, l);
    return {
        selected: i,
        onContextMenu: o,
        onContextMenuModerateUser: d,
        onClickUsername: c,
        onClickAvatar: (0, nL.Jo)(r, l),
        onPopoutRequestClose: a.useCallback(
            () => l({ usernameProfile: !1, avatarProfile: !1, referencedUsernameProfile: !1 }),
            [l],
        ),
        renderPopout: nM.A,
        showAvatarPopout: r,
        showUsernamePopout: s,
    };
}
function nK(e, t, n) {
    return a.useMemo(() => {
        if (null != t && null != n)
            return (i) => (0, s.jsx)(nI.A, { ...i, user: t, currentUser: n, guildId: e.guild_id, channelId: e.id });
    }, [e, t, n]);
}
function nY(e) {
    let { children: t, className: n, compact: i } = e;
    return (0, s.jsx)("div", { className: eN()(nG.xQ, n, { [nG.oE]: i }), children: t });
}
function nW(e) {
    let { children: t, className: n } = e;
    return (0, s.jsx)("div", { className: eN()(nG.A3, n), children: t });
}
function nX(e) {
    switch (e) {
        case nA.G.DELETE_USER_MESSAGE:
            return (0, s.jsx)(tv.TrashIcon, { size: "xs", color: "currentColor", className: nG.yr });
        case nA.G.SET_COMPLETED:
            return (0, s.jsx)(nc.CheckmarkLargeIcon, {
                size: "xs",
                color: "currentColor",
                className: eN()(nG.yr, nG.r0),
            });
        case nA.G.SUBMIT_FEEDBACK:
            return (0, s.jsx)(nu.FlagIcon, { size: "xs", color: "currentColor", className: nG.yr });
        default:
            return null;
    }
}
function nZ(e) {
    let { alertAction: t, guildId: n } = e,
        i = (0, d.bG)([T.default], () => T.default.getUser(t.actor), [t.actor]);
    try {
        let e = parseInt(t.actionType);
        if (null == i) return nX(e);
        let l = (function (e, t, n) {
            let i = tK.Ay.getNickname(n, null, t) ?? ez.Ay.getUserTag(t),
                l = e3()(e.ts),
                s = `${i} ${l.fromNow()}`;
            try {
                switch (parseInt(e.actionType)) {
                    case nA.G.DELETE_USER_MESSAGE:
                        return y.intl.formatToPlainString(y.t.BtKE9h, { userName: i, timestamp: l.fromNow() });
                    case nA.G.SET_COMPLETED:
                        return y.intl.formatToPlainString(y.t.dyo9US, { userName: i, timestamp: l.fromNow() });
                    case nA.G.SUBMIT_FEEDBACK:
                        return y.intl.formatToPlainString(y.t["C9/kIO"], { userName: i, timestamp: l.fromNow() });
                    default:
                        return s;
                }
            } catch (e) {
                return s;
            }
        })(t, i, n);
        return (0, s.jsx)(nm.m, { text: l, children: nX(e) });
    } catch (e) {
        return null;
    }
}
function nq(e) {
    let { alertActionsExecution: t, guildId: n } = e,
        i = Object.values(t.actions).sort((e, t) => (e.actionType < t.actionType ? 1 : -1));
    return (0, s.jsx)("div", {
        className: nG.q_,
        children: i.map((e) => (0, s.jsx)(nZ, { alertAction: e, guildId: n }, e.actionType)),
    });
}
let nQ = a.memo(function (e) {
    let t,
        { message: n, channel: i, embedChannel: l, compact: a, interactionUserId: r } = e,
        o = nJ(n, i),
        d = nK(i, n.author),
        c = (0, L.Ay)(n),
        u = (0, nb.tO)({ message: n, channel: i, author: c, guildId: i?.guild_id, compact: a, ...o }, d),
        m = T.default.getUser(r),
        h = nJ(n, i),
        g = nK(i, m, T.default.getCurrentUser());
    if (null != m) {
        let e = (0, L.FT)(m, i),
            l = (0, nb.tO)({ message: n, channel: i, author: e, guildId: i?.guild_id, compact: a, ...h }, g);
        t = () => l;
    }
    return (0, s.jsx)(k.E, {
        variant: "text-md/normal",
        color: "text-strong",
        tag: "span",
        className: nG.he,
        children: (0, E.fu)(
            n,
            l,
            function () {
                return (0, s.jsx)("div", {
                    className: nG.aT,
                    children: (0, s.jsx)(nS, { channel: l, className: nG.HA, openChatWithoutConnecting: !0 }),
                });
            },
            function () {
                return u;
            },
            t,
        ),
    });
});
function n$(e) {
    let { id: t, compact: n, message: i, channel: l } = e,
        {
            avatarSrc: r,
            eventHandlers: { onMouseEnter: o, onMouseLeave: c },
        } = nH(!0),
        { onFocus: u, ...m } = (0, nd.rm)(t ?? ""),
        { isFocused: h, handleFocus: g, handleBlur: A } = (0, nL.G8)(u),
        x = (0, d.bG)([M.Ay], () => M.Ay.keyboardModeEnabled),
        f = (0, d.bG)([Y.A], () => Y.A.can(D.xBc.MANAGE_MESSAGES, l), [l]),
        {
            ruleName: I,
            embedChannel: C,
            decisionId: v,
            keywordMatchedContent: N,
            keyword: j,
            content: T,
            flaggedMessageId: S,
            timeoutDuration: b,
            decisionReason: R,
            alertActionsExecution: L,
            quarantineType: O,
            interactionUserId: P,
        } = (0, E.Ay)(i),
        U = a.useMemo(() => (0, tY.Tz)(T, N, l.id), [T, N, l]),
        { selected: G, ...w } = nJ(i, l),
        H = a.useCallback(() => {
            (0, nx.w2)(i.id, T, v, l);
        }, [i.id, T, v, l]),
        B = a.useCallback(
            (e) => {
                null != S &&
                    null != C &&
                    (e.stopPropagation(), e.preventDefault(), (0, nE.A)(D.BVt.CHANNEL(C?.guild_id, C?.id, S)));
            },
            [C, S],
        ),
        F = a.useCallback(
            (e) => {
                null != C &&
                    (p.default.selectChannel({ guildId: C.guild_id, channelId: e, messageId: i.id }), (0, ep.iN)(e));
            },
            [i, C],
        ),
        V = a.useCallback(() => {
            (0, nf.E5)(i.id, l, nA.G.DELETE_USER_MESSAGE);
        }, [l, i.id]),
        z = (0, nz.getFriendlyDurationString)(Number(b)),
        J = null != R,
        K = f && null != S && (null == L || !L.actions.hasOwnProperty(nA.G.DELETE_USER_MESSAGE)),
        W = i.embeds.length > 0 ? i.embeds[0].fields.find((e) => "channel_id" === e.rawName)?.rawValue : null,
        X = null != W;
    return (0, s.jsx)("div", {
        onMouseEnter: o,
        onMouseLeave: c,
        children: (0, s.jsx)(_.A, {
            className: eN()(nG.rs, { [nG.oE]: n }),
            iconNode: n ? null : (0, s.jsx)(nB, { src: r }),
            iconContainerClassName: nG.zc,
            compact: n,
            children: (0, s.jsxs)("div", {
                className: eN()(nG.Qs, { [nG.oE]: n }),
                children: [
                    (0, s.jsx)(nb.ix, {
                        message: i,
                        messageClassname: nG.he,
                        className: eN()(nG.QV, nG.he, { [nG.oE]: n }),
                        username: (0, s.jsxs)("div", {
                            className: nG.he,
                            children: [
                                (0, s.jsx)(k.E, {
                                    variant: "text-md/normal",
                                    color: "text-brand",
                                    tag: "span",
                                    className: nG.Xh,
                                    children: y.intl.string(y.t.hG1StD),
                                }),
                                (0, s.jsx)(np.A, { type: nV.nu.SYSTEM_DM, className: nG.Al }),
                                (0, s.jsx)(nQ, {
                                    message: i,
                                    channel: l,
                                    embedChannel: C,
                                    compact: n,
                                    interactionUserId: P,
                                }),
                            ],
                        }),
                        compact: n,
                        showTimestamp: !0,
                    }),
                    (0, s.jsx)("div", {
                        className: eN()(nG.BK, { [nG.oE]: n }),
                        children: (0, s.jsx)(nk, {
                            ...m,
                            message: i,
                            channel: C,
                            content: U,
                            compact: n,
                            withFooter: !0,
                            hideTimestamp: !0,
                            className: eN()(nG.gD, {
                                [nG.oE]: n,
                                [nG.wH]: G || (x && h),
                                [nG.JD]: null != S && null != C,
                            }),
                            childrenAccessories: (0, s.jsxs)(s.Fragment, {
                                children: [
                                    (0, s.jsxs)("div", {
                                        className: nG.Y4,
                                        children: [
                                            null != j &&
                                                (0, s.jsxs)(s.Fragment, {
                                                    children: [
                                                        (0, s.jsx)(k.E, {
                                                            variant: "text-xs/medium",
                                                            color: "text-muted",
                                                            tag: "span",
                                                            children: y.intl.format(y.t.SYIUTR, { keyword: j }),
                                                        }),
                                                        (0, s.jsx)("div", { className: eN()(nG.Om, nG.Gx) }),
                                                    ],
                                                }),
                                            null != I &&
                                                (0, s.jsx)(k.E, {
                                                    variant: "text-xs/medium",
                                                    color: "text-muted",
                                                    tag: "span",
                                                    children: y.intl.format(y.t.ZoOyKB, { ruleName: I }),
                                                }),
                                            null != z &&
                                                (0, s.jsxs)(s.Fragment, {
                                                    children: [
                                                        (0, s.jsx)("div", { className: eN()(nG.Om, nG.Gx) }),
                                                        (0, s.jsx)(k.E, {
                                                            variant: "text-xs/medium",
                                                            color: "text-muted",
                                                            tag: "span",
                                                            className: nG.__invalid_footerText,
                                                            children: y.intl.format(y.t["3LYql6"], { duration: z }),
                                                        }),
                                                    ],
                                                }),
                                            null != O &&
                                                (0, s.jsxs)(s.Fragment, {
                                                    children: [
                                                        (0, s.jsx)("div", { className: eN()(nG.Om, nG.Gx) }),
                                                        (0, s.jsx)(k.E, {
                                                            variant: "text-xs/medium",
                                                            color: "text-muted",
                                                            tag: "span",
                                                            className: nG.nx,
                                                            children: y.intl.format(y.t["26bB2M"], {
                                                                reason: (0, E.o2)(O),
                                                            }),
                                                        }),
                                                    ],
                                                }),
                                        ],
                                    }),
                                    J
                                        ? (0, s.jsx)(nW, {
                                              children: (0, s.jsx)(k.E, {
                                                  variant: "text-xs/medium",
                                                  color: "text-default",
                                                  tag: "span",
                                                  children: R,
                                              }),
                                          })
                                        : null,
                                ],
                            }),
                            popoutProps: w,
                            zalgo: !0,
                            onFocus: g,
                            onBlur: A,
                            onClick: B,
                        }),
                    }),
                    (0, s.jsx)(nY, {
                        compact: n,
                        children: (0, s.jsxs)("div", {
                            className: eN()(nG.Y4, nG.UD, { [nG.oE]: n }),
                            children: [
                                (0, s.jsxs)("div", {
                                    className: nG.AX,
                                    children: [
                                        (0, s.jsx)(nh.ShieldIcon, {
                                            size: "xs",
                                            color: eg.A.unsafe_rawColors.BRAND_500.css,
                                            className: nG.Dq,
                                        }),
                                        (0, s.jsx)(ng.Q, {
                                            variant: "primary",
                                            size: "sm",
                                            textVariant: "text-xs/normal",
                                            text: y.intl.string(y.t.DEoVWZ),
                                            onClick: function (e) {
                                                w.onContextMenuModerateUser?.(e);
                                            },
                                        }),
                                    ],
                                }),
                                X
                                    ? (0, s.jsxs)(s.Fragment, {
                                          children: [
                                              (0, s.jsx)("div", { className: nG.Om }),
                                              (0, s.jsx)("div", {
                                                  className: nG.AX,
                                                  children: (0, s.jsx)(ng.Q, {
                                                      onClick: () => F(W),
                                                      variant: "primary",
                                                      size: "sm",
                                                      textVariant: "text-xs/normal",
                                                      text: y.intl.string(y.t.jtkj06),
                                                  }),
                                              }),
                                          ],
                                      })
                                    : null,
                                (0, s.jsx)("div", { className: nG.Om }),
                                (0, s.jsx)("div", {
                                    className: nG.AX,
                                    children: (0, s.jsx)(ng.Q, {
                                        onClick: H,
                                        variant: "primary",
                                        size: "sm",
                                        textVariant: "text-xs/normal",
                                        text: y.intl.string(y.t["94JbM3"]),
                                    }),
                                }),
                                K
                                    ? (0, s.jsxs)(s.Fragment, {
                                          children: [
                                              (0, s.jsx)("div", { className: nG.Om }),
                                              (0, s.jsx)("div", {
                                                  className: nG.AX,
                                                  children: (0, s.jsx)(ng.Q, {
                                                      onClick: V,
                                                      variant: "primary",
                                                      size: "sm",
                                                      textVariant: "text-xs/normal",
                                                      text: y.intl.string(y.t["3A52tY"]),
                                                  }),
                                              }),
                                          ],
                                      })
                                    : null,
                                null != L ? (0, s.jsx)(nq, { alertActionsExecution: L, guildId: l.guild_id }) : null,
                            ],
                        }),
                    }),
                ],
            }),
        }),
    });
}
var n0 = n(718564),
    n1 = (((i = {}).JOIN_RAID = "JOIN_RAID"), (i.DM_RAID = "DM_RAID"), (i.MENTION_RAID = "MENTION_RAID"), i),
    n2 = n(695366),
    n3 = n(848847),
    n5 = n(939249),
    n6 = n(953822),
    n7 = n(585510),
    n9 = n(903093),
    n8 = n(894591),
    n4 = n(854627),
    ie = n(474352);
function it() {
    return (0, s.jsx)("div", { className: ie.Om });
}
function ii(e) {
    let { message: t, compact: n } = e,
        { notificationType: i } = (0, E.Bk)(t);
    switch (i) {
        case E.ZA:
        case n0.W.RAID:
            return (0, s.jsx)(ir, { message: t, compact: n });
        case n0.W.MENTION_RAID:
            return (0, s.jsx)(io, { message: t, compact: n });
        case n0.W.ACTIVITY_ALERTS_ENABLED:
            return (0, s.jsx)(ia, { message: t, compact: n });
        case n0.W.INTERACTION_BLOCKED:
            return (0, s.jsx)(is, { compact: n });
        default:
            return (0, s.jsx)(il, { compact: n });
    }
}
function il(e) {
    let { compact: t } = e;
    return (0, s.jsx)(id, {
        compact: t,
        header: (0, s.jsxs)(a.Fragment, {
            children: [
                (0, s.jsx)(n2.E, { size: "xs", color: eg.A.colors.TEXT_DEFAULT.css }),
                (0, s.jsx)(k.E, {
                    variant: "text-md/semibold",
                    color: "text-default",
                    children: y.intl.string(y.t.VdZCcC),
                }),
            ],
        }),
        content: (0, s.jsx)(k.E, {
            variant: "text-md/normal",
            color: "text-muted",
            children: y.intl.string(y.t["NxHYX/"]),
        }),
    });
}
function is(e) {
    let { compact: t } = e;
    return (0, s.jsx)(id, {
        compact: t,
        header: (0, s.jsxs)(a.Fragment, {
            children: [
                (0, s.jsx)(n2.E, { size: "xs", color: eg.A.colors.TEXT_DEFAULT.css }),
                (0, s.jsx)(k.E, {
                    variant: "text-md/semibold",
                    color: "text-default",
                    children: y.intl.string(y.t["2qTBw/"]),
                }),
            ],
        }),
        content: (0, s.jsx)(k.E, {
            variant: "text-md/normal",
            color: "text-muted",
            children: y.intl.string(y.t.Dc9wCp),
        }),
    });
}
function ia(e) {
    let { message: t, compact: n } = e,
        i = T.default.getUser((0, E.ZD)(t)),
        l = tF.A.getBasicChannel(t.channel_id)?.guild_id,
        r = null != l && null != i ? j.Ay.getMember(l, i.id) : null,
        { avatarSrc: o, avatarDecorationSrc: d, eventHandlers: c } = (0, n4.A)({ userId: i?.id, guildId: l, size: 12 }),
        u = a.useRef(null);
    return (0, s.jsx)(id, {
        compact: n,
        header: (0, s.jsxs)(a.Fragment, {
            children: [
                (0, s.jsx)(n3.H, { size: "xs", color: eg.A.colors.TEXT_FEEDBACK_POSITIVE.css }),
                (0, s.jsx)(k.E, {
                    variant: "text-md/semibold",
                    color: "text-feedback-positive",
                    children: y.intl.string(y.t.lVLiFp),
                }),
            ],
        }),
        subheader: (0, s.jsxs)("div", {
            className: ie.Ns,
            children: [
                (0, s.jsx)("div", {
                    className: ie.gk,
                    children:
                        null != r &&
                        null != i &&
                        (0, s.jsxs)(a.Fragment, {
                            children: [
                                (0, s.jsx)(k.E, {
                                    variant: "text-xs/medium",
                                    color: "text-default",
                                    children: y.intl.string(y.t.qlFrXW),
                                }),
                                (0, s.jsx)(tp.A, {
                                    targetElementRef: u,
                                    user: i,
                                    guildId: l,
                                    channelId: t.channel_id,
                                    messageId: t.id,
                                    children: (e) =>
                                        (0, s.jsxs)(n5.D, {
                                            innerRef: u,
                                            className: ie.rI,
                                            ...e,
                                            children: [
                                                (0, s.jsx)("div", {
                                                    ...c,
                                                    children: (0, s.jsx)(nP.eu, {
                                                        src: o,
                                                        avatarDecoration: d,
                                                        size: tZ._3.SIZE_16,
                                                        "aria-label": "TODO",
                                                    }),
                                                }),
                                                (0, s.jsxs)(k.E, {
                                                    variant: "text-xs/medium",
                                                    style: {
                                                        color:
                                                            null != r.colorString
                                                                ? r.colorString
                                                                : eg.A.colors.TEXT_DEFAULT.css,
                                                    },
                                                    children: [" ", "@", i.username],
                                                }),
                                            ],
                                        }),
                                }),
                            ],
                        }),
                }),
                (0, s.jsx)(it, {}),
                (0, s.jsx)(k.E, {
                    variant: "text-xs/medium",
                    color: "text-default",
                    children: e3()(t.timestamp).fromNow(),
                }),
            ],
        }),
        content: (0, s.jsx)(k.E, {
            variant: "text-md/normal",
            color: "text-muted",
            children: y.intl.string(y.t["QV/8u5"]),
        }),
    });
}
function ir(e) {
    let { message: t, compact: n } = e,
        { joinAttempts: i, raidDatetime: l, dmsSent: r, raidType: o, resolvedReason: c } = (0, E.Bk)(t),
        u = (0, d.bG)([tF.A], () => tF.A.getChannel(t.channel_id), [t.channel_id]),
        m = u?.guild_id ?? null,
        { shouldShowIncidentActions: h } = (0, n7.Li)(m),
        g = (0, nL.Am)(t.author.id, t.channel_id),
        p = a.useCallback(() => {
            let e = u?.guild_id;
            null != e && (0, nx.is)(t.id, e);
        }, [t.id, u]),
        A = o === n1.DM_RAID,
        x = A ? n2.E : n6.E;
    return (0, s.jsx)(id, {
        compact: n,
        header: (0, s.jsxs)(a.Fragment, {
            children: [
                (0, s.jsx)(x, { size: "xs", color: eg.A.colors.TEXT_FEEDBACK_CRITICAL.css }),
                (0, s.jsx)(k.E, {
                    variant: "text-md/semibold",
                    color: "text-feedback-critical",
                    children: A ? y.intl.string(y.t["8+lHUb"]) : y.intl.string(y.t.xMwcwV),
                }),
            ],
        }),
        subheader: (0, s.jsxs)("div", {
            className: ie.Ns,
            children: [
                null != i &&
                    (0, s.jsx)(k.E, {
                        variant: "text-xs/medium",
                        color: "text-default",
                        children: y.intl.format(y.t["4ylIiu"], { joinCount: i }),
                    }),
                null != r &&
                    (0, s.jsx)(k.E, {
                        variant: "text-xs/medium",
                        color: "text-default",
                        children: y.intl.format(y.t["5C8Mh3"], { dmsSent: r }),
                    }),
                null != l &&
                    (0, s.jsxs)(a.Fragment, {
                        children: [
                            (0, s.jsx)(it, {}),
                            (0, s.jsx)(k.E, {
                                variant: "text-xs/medium",
                                color: "text-default",
                                children: e3()(l).fromNow(),
                            }),
                        ],
                    }),
            ],
        }),
        content:
            null != l
                ? (0, s.jsx)(k.E, {
                      variant: "text-md/normal",
                      color: "text-muted",
                      children: y.intl.format(y.t["4QIIZl"], {
                          dateTime: l.toLocaleString(y.intl.currentLocale, n9.yc),
                      }),
                  })
                : null,
        footerButtons: h
            ? (0, s.jsxs)("div", {
                  className: ie.OZ,
                  children: [
                      (0, s.jsxs)("div", {
                          className: ie.AX,
                          children: [
                              (0, s.jsx)(nh.ShieldIcon, {
                                  size: "xs",
                                  color: eg.A.unsafe_rawColors.BRAND_500.css,
                                  className: ie.Dq,
                              }),
                              (0, s.jsx)(ng.Q, {
                                  variant: "primary",
                                  size: "sm",
                                  textVariant: "text-xs/medium",
                                  text: y.intl.string(y.t.DEoVWZ),
                                  onClick: function (e) {
                                      g(e);
                                  },
                              }),
                          ],
                      }),
                      (0, s.jsx)(it, {}),
                      (0, s.jsx)("div", {
                          className: ie.AX,
                          children: (0, s.jsx)(ng.Q, {
                              variant: "primary",
                              textVariant: "text-xs/medium",
                              size: "sm",
                              text: (0, E.Oj)(c),
                              onClick: p,
                          }),
                      }),
                  ],
              })
            : null,
    });
}
function io(e) {
    let { message: t, compact: n } = e,
        i = tF.A.getBasicChannel(t.channel_id)?.guild_id,
        { raidDatetime: l, decisionId: r, suspiciousMentionActivityUntil: o } = (0, E.Bk)(t);
    return (0, s.jsx)(id, {
        compact: n,
        header: (0, s.jsxs)(a.Fragment, {
            children: [
                (0, s.jsx)(n2.E, { size: "xs", color: eg.A.colors.TEXT_FEEDBACK_CRITICAL.css }),
                (0, s.jsx)(k.E, {
                    variant: "text-md/semibold",
                    color: "text-feedback-critical",
                    children: y.intl.string(y.t.C2uIXE),
                }),
            ],
        }),
        subheader: (0, s.jsx)("div", {
            className: ie.Ns,
            children:
                null != l &&
                (0, s.jsx)(k.E, { variant: "text-xs/medium", color: "text-default", children: e3()(l).fromNow() }),
        }),
        content: (0, s.jsx)(k.E, {
            variant: "text-md/normal",
            color: "text-muted",
            children: y.intl.string(y.t.SWIWEV),
        }),
        footerButtons: (0, s.jsxs)("div", {
            className: ie.OZ,
            children: [
                (0, s.jsx)("div", {
                    className: ie.AX,
                    children: (0, s.jsx)(ng.Q, {
                        variant: "primary",
                        textVariant: "text-xs/medium",
                        size: "sm",
                        text: y.intl.string(y.t.oX14El),
                        onClick: function () {
                            null != i &&
                                null != r &&
                                (0, nf.W5)(i, r, () => {
                                    ((0, n8.w)(o), (0, nf.wu)(i));
                                });
                        },
                    }),
                }),
                (0, s.jsx)(it, {}),
                (0, s.jsx)("div", {
                    className: ie.AX,
                    children: (0, s.jsx)(ng.Q, {
                        variant: "primary",
                        textVariant: "text-xs/medium",
                        size: "sm",
                        text: y.intl.string(y.t["1R7QIx"]),
                        onClick: function () {
                            null != i && em.A.open(i, D.BEX.GUILD_AUTOMOD, void 0, D.nd0.AUTOMOD_MENTION_SPAM);
                        },
                    }),
                }),
            ],
        }),
    });
}
function id(e) {
    let { compact: t, header: n, subheader: i, content: l, footerButtons: a } = e;
    return (0, s.jsxs)("div", {
        className: eN()(ie.gD, { [ie.oE]: t }),
        children: [
            (0, s.jsxs)("div", {
                className: ie.Ux,
                children: [
                    (0, s.jsxs)("div", {
                        className: ie.LN,
                        children: [
                            (0, s.jsx)("div", { className: ie.MY, children: n }),
                            null != i && (0, s.jsx)("div", { className: ie.m_, children: i }),
                        ],
                    }),
                    l,
                ],
            }),
            null != a && (0, s.jsx)("div", { className: eN()(ie.Y4, ie.UX, { [ie.oE]: t }), children: a }),
        ],
    });
}
function ic(e) {
    let { id: t, compact: n, message: i, channel: l } = e,
        {
            avatarSrc: a,
            eventHandlers: { onMouseEnter: r, onMouseLeave: o },
        } = nH(!0),
        { notificationType: d } = (0, E.Bk)(i),
        c = null == d || d === n0.W.RAID;
    return (0, s.jsx)("div", {
        onMouseEnter: r,
        onMouseLeave: o,
        children: (0, s.jsx)(_.A, {
            className: eN()(ie.rs, { [ie.oE]: n }),
            iconNode: n ? null : (0, s.jsx)(nB, { src: a }),
            iconContainerClassName: ie.zc,
            compact: n,
            children: (0, s.jsxs)("div", {
                className: eN()(ie.Qs, { [ie.oE]: n }),
                children: [
                    (0, s.jsx)(nb.ix, {
                        message: i,
                        messageClassname: ie.he,
                        className: eN()(ie.QV, ie.he, { [ie.oE]: n }),
                        username: (0, s.jsxs)("div", {
                            className: ie.he,
                            children: [
                                (0, s.jsx)(k.E, {
                                    variant: "text-md/normal",
                                    color: "text-brand",
                                    tag: "span",
                                    className: ie.Xh,
                                    children: y.intl.string(y.t.hG1StD),
                                }),
                                (0, s.jsx)(np.A, { type: nV.nu.SYSTEM_DM, className: ie.Al }),
                                c &&
                                    (0, s.jsx)(k.E, {
                                        variant: "text-md/normal",
                                        color: "text-strong",
                                        tag: "span",
                                        className: ie.he,
                                        children: y.intl.string(y.t.ufawcw),
                                    }),
                            ],
                        }),
                        compact: n,
                        showTimestamp: !0,
                    }),
                    (0, s.jsx)("div", { className: ie.BZ }),
                    (0, s.jsx)(ii, { message: i, compact: n }),
                ],
            }),
        }),
    });
}
function iu(e) {
    let { message: t, ...n } = e;
    return (0, E.de)(t) ? (0, s.jsx)(ic, { message: t, ...n }) : (0, s.jsx)(n$, { message: t, ...n });
}
var im = n(480012);
function ih(e) {
    let { message: t, compact: i, missed: l, joinable: a, usernameHook: r, onClickJoinCall: o } = e,
        d = (0, L.Ay)(t),
        c = d.nick,
        u = r(d),
        m = (0, im.A)(t);
    return l
        ? (0, s.jsx)(_.A, {
              icon: n(130158),
              timestamp: t.timestamp,
              compact: i,
              children:
                  null != m
                      ? y.intl.format(y.t.AcqBmO, { username: c, usernameHook: u, callDuration: m })
                      : y.intl.format(y.t["43phHx"], { username: c, usernameHook: u }),
          })
        : (0, s.jsxs)(_.A, {
              icon: n(175476),
              timestamp: t.timestamp,
              compact: i,
              children: [
                  null != m
                      ? y.intl.format(y.t["7TeC1P"], { username: c, usernameHook: u, callDuration: m })
                      : y.intl.format(y.t.LuB5RD, { username: c, usernameHook: u }),
                  a ? (0, s.jsx)(_.A.Action, { onClick: o, children: y.intl.string(y.t.oa9mvZ) }) : null,
              ],
          });
}
var ig = n(517905);
function ip(e) {
    let { children: t, messageReference: n, guildName: i } = e,
        l = a.useRef(null);
    if (null == n) return (0, s.jsx)(tg.Anchor, { children: t });
    let { guild_id: r } = n;
    return null == r
        ? (0, s.jsx)(tg.Anchor, { children: t })
        : (0, s.jsx)(ig.A, {
              guildId: r,
              name: i,
              targetElementRef: l,
              children: (e) => {
                  let { "aria-controls": n, "aria-expanded": i, ...a } = e;
                  return (0, s.jsx)(tg.Anchor, { ...a, ref: l, children: t });
              },
          });
}
function iA(e) {
    let { usernameHook: t, message: i, compact: l } = e,
        { content: a, timestamp: r, messageReference: o } = i,
        d = (0, L.Ay)(i),
        c = t(d),
        u = (a ?? "").split(" ").slice(0, -1).join(" "),
        m = y.intl.format(y.t["47CZc2"], {
            username: d.nick,
            usernameHook: c,
            webhookName: a,
            webhookNameHook: (e, t) => (0, s.jsx)(ip, { messageReference: o, guildName: u, children: e }, t),
        });
    return (0, s.jsx)(_.A, { icon: n(617184), timestamp: r, compact: l, children: m });
}
var ix = n(22231),
    iE = n(73028);
function iI(e) {
    let { message: t, usernameHook: n, compact: i } = e,
        l = (0, L.Ay)(t),
        a = n(l);
    return (0, s.jsx)(_.A, {
        iconNode: (0, s.jsx)(ix.PencilIcon, { size: "xs", color: "currentColor" }),
        timestamp: t.timestamp,
        compact: i,
        children: y.intl.format(y.t["4wLp25"], {
            username: l.nick,
            usernameHook: a,
            editGroupButton: (0, s.jsx)(
                k.E,
                { tag: "span", variant: "text-md/medium", color: "text-link", children: y.intl.string(y.t["5Q9+/L"]) },
                `edit-group-button-${t.id}`,
            ),
            onEditGroup: () => (0, iE.U)(t.channel_id, H.A.GROUP_DM_SYSTEM_MESSAGE_ICON),
        }),
    });
}
var iC = n(663417),
    i_ = n(429913),
    iv = n(564178);
function iN(e) {
    let { message: t, channel: n, compact: i } = e,
        l = (0, L.Ay)(t),
        a = (0, C.P)({ user: t.author, channelId: n.id, guildId: n.guild_id, messageId: t.id })(l),
        r = (0, i_.h)(t.applicationId);
    if (null == r) return null;
    let o = y.intl.format(y.t.mAtJTC, {
        username: t.author.username,
        usernameHook: a,
        applicationName: r.name,
        applicationNameHook: () =>
            (0, s.jsx)(
                k.E,
                { className: iv.S, variant: "text-md/semibold", color: "text-strong", children: r.name },
                r.name,
            ),
        helpdeskArticle: "#",
    });
    return (0, s.jsx)(_.A, {
        iconNode: (0, s.jsx)(iC.RefreshIcon, { size: "sm", color: eg.A.colors.STATUS_POSITIVE }),
        timestamp: t.timestamp,
        compact: i,
        contentClassName: iv.H,
        children: o,
    });
}
function ij(e) {
    let { message: t, usernameHook: n, compact: i, isForumPost: l } = e,
        a = (0, L.Ay)(t),
        r = n(a),
        o = (0, d.bG)([tF.A], () => tF.A.getChannel(t.channel_id)?.isGroupDM() ?? !1);
    return (0, s.jsx)(_.A, {
        compact: i,
        iconNode: (0, s.jsx)(ix.PencilIcon, { size: "xs", color: "currentColor" }),
        timestamp: t.timestamp,
        children: o
            ? y.intl.format("" === t.content ? y.t.AI1ZZr : y.t.geP3rU, {
                  username: a.nick,
                  usernameHook: r,
                  channelName: (0, s.jsx)(
                      k.E,
                      { tag: "span", variant: "text-md/medium", color: "text-strong", children: t.content },
                      `group-name-${t.id}`,
                  ),
                  editGroupButton: (0, s.jsx)(
                      k.E,
                      {
                          tag: "span",
                          variant: "text-md/medium",
                          color: "text-link",
                          children: y.intl.string(y.t["5Q9+/L"]),
                      },
                      `edit-group-button-${t.id}`,
                  ),
                  onEditGroup: () => (0, iE.U)(t.channel_id, H.A.GROUP_DM_SYSTEM_MESSAGE_NAME),
              })
            : y.intl.format(l ? y.t.SOQ4hJ : y.t.oItgEw, { username: a.nick, usernameHook: r, channelName: t.content }),
    });
}
var iT = n(366605);
function iS(e) {
    let { message: t, usernameHook: n, onClickPins: i, compact: l } = e,
        a = (0, L.Ay)(t),
        r = a.nick,
        o = n(a);
    function d() {
        if (null == t.messageReference) return;
        let { channel_id: e, message_id: n } = t.messageReference;
        g.A.jumpToMessage({ channelId: e, messageId: n, flash: !0 });
    }
    let c = { iconNode: (0, s.jsx)(iT.t, { size: "sm", color: "currentColor" }) };
    return (0, s.jsx)(_.A, {
        ...c,
        timestamp: t.timestamp,
        compact: l,
        children:
            null != t.messageReference
                ? null == i
                    ? y.intl.format(y.t.lD5tup, { usernameHook: o, username: r, messageOnClick: d })
                    : y.intl.format(y.t.yIDvPL, {
                          usernameHook: o,
                          username: r,
                          pinsActionOnClick: i,
                          messageOnClick: d,
                      })
                : null == i
                  ? y.intl.format(y.t.vfkjqx, { usernameHook: o, username: r })
                  : y.intl.format(y.t.R7vZGZ, { usernameHook: o, username: r, pinsActionOnClick: i }),
    });
}
var iy = n(497767);
function ib(e) {
    let t,
        { message: n, channel: i, compact: l } = e,
        a = n.getChannelId(),
        r = i.isDM() ? i.getRecipientId() : void 0,
        o = (0, d.bG)([T.default], () => (null != r ? T.default.getUser(r) : void 0), [r]),
        c = (0, d.bG)([T.default], () => T.default.getCurrentUser(), []),
        u = null != c && n.author.id === c.id,
        m = (0, L.d8)(o, i),
        h = (0, C.P)({ user: o, channelId: a, guildId: void 0, messageId: n.id })(m);
    if (!i.isDM() || null == o || null == c) return null;
    let g = { username: m.nick, usernameHook: h },
        p = n.content;
    if (null != p && "" !== p) {
        let e = (0, s.jsx)(
            k.E,
            { tag: "span", variant: "text-md/medium", color: "text-strong", children: p },
            `note-${n.id}`,
        );
        t = u ? y.intl.format(y.t.IquUXd, { ...g, note: e }) : y.intl.format(y.t.ZOZy2q, { ...g, note: e });
    } else t = u ? y.intl.format(y.t.S6PRsh, g) : y.intl.format(y.t["H/9Tlj"], g);
    return (0, s.jsx)(_.A, {
        iconNode: (0, s.jsx)(iy.V, { size: "sm", color: eg.A.colors.STATUS_POSITIVE }),
        timestamp: n.timestamp,
        compact: l,
        children: t,
    });
}
function iR(e) {
    let { message: t, compact: n, usernameHook: i } = e,
        l = (0, L.Ay)(t),
        a = i(l),
        {
            avatarSrc: r,
            eventHandlers: { onMouseEnter: o, onMouseLeave: d },
        } = nH(!0),
        c =
            "" !== t.content
                ? new Date(t.content).toLocaleString(y.intl.currentLocale, {
                      hour: "numeric",
                      minute: "2-digit",
                      month: "2-digit",
                      day: "2-digit",
                      year: "numeric",
                  })
                : "";
    return (0, s.jsx)("div", {
        onMouseEnter: o,
        onMouseLeave: d,
        children: (0, s.jsx)(_.A, {
            className: eN()(ie.rs, { [ie.oE]: n }),
            iconNode: n ? null : (0, s.jsx)(nB, { src: r }),
            iconContainerClassName: ie.zc,
            compact: n,
            children: (0, s.jsxs)("div", {
                className: eN()(ie.Qs, { [ie.oE]: n }),
                children: [
                    (0, s.jsx)(nb.ix, {
                        message: t,
                        messageClassname: ie.he,
                        className: eN()(ie.QV, ie.he, { [ie.oE]: n }),
                        username: (0, s.jsxs)("div", {
                            className: ie.he,
                            children: [
                                (0, s.jsx)(k.E, {
                                    variant: "text-md/normal",
                                    color: "text-brand",
                                    tag: "span",
                                    className: ie.Xh,
                                    children: y.intl.string(y.t.hG1StD),
                                }),
                                (0, s.jsx)(np.A, { type: nV.nu.SYSTEM_DM, className: ie.Al }),
                            ],
                        }),
                        compact: n,
                        showTimestamp: !0,
                    }),
                    (0, s.jsx)("div", {
                        className: eN()(ie.__invalid_messageContent, { [ie.oE]: n }),
                        children:
                            t.type === D.lAJ.GUILD_INCIDENT_ALERT_MODE_ENABLED
                                ? y.intl.format(y.t["+m8eD7"], { username: l.nick, usernameHook: a, time: c })
                                : y.intl.format(y.t["BHeke+"], { username: l.nick, usernameHook: a }),
                    }),
                ],
            }),
        }),
    });
}
var ik = n(554146),
    iM = n(367727),
    iL = n(104510),
    iO = n(987144);
function iP(e) {
    let { guild: t, analyticsLocation: n, analyticsLocations: i, closeLayer: l, variant: r = "expressive" } = e,
        [o, c] = a.useState(!1),
        { analyticsLocations: m } = (0, B.Ay)(i ?? []),
        h = (0, d.bG)([T.default], () => T.default.getCurrentUser()),
        g = h?.isPremiumGroupMember();
    async function p() {
        (c(!0),
            await (0, iO.g)({
                analyticsLocations: m,
                analyticsLocation: { object: D.ZSU.BUTTON_CTA, objectType: D.AnalyticsObjectTypes.BUY, ...n },
                guild: t,
                closeLayer: l,
                onClose: () => {
                    c(!1);
                },
            }));
    }
    return (0, s.jsx)(u.$, {
        variant: r,
        size: "md",
        icon: iL._,
        text: y.intl.string(y.t.gKmQ1G),
        onClick: p,
        loading: o,
        disabled: g,
    });
}
var iD = n(363487),
    iU = n(828162),
    iG = n(49999),
    iw = n(25525),
    iH = n(764828);
let iB =
        "https://cdn.discordapp.com/assets/content/d13cdfe882b0acba4f7752d488ba86dc628364d43eb3be876c8bb6f0bc80a240.png",
    iF =
        "https://cdn.discordapp.com/assets/content/424bcefb880eff14d647b0467cf446e83c27321af508a2e0a5f707d80c42e58b.png";
function iV(e) {
    let { title: t, body: n, guild: i, analyticsLocations: l } = e,
        a = (0, d.bG)([M.Ay], () => M.Ay.useReducedMotion);
    return (0, s.jsxs)("div", {
        className: iH.kL,
        children: [
            (0, s.jsx)("div", {
                className: iH.ZS,
                children: (0, s.jsx)("img", { className: iH.Sl, src: a ? iF : iB, alt: "Boost gem" }),
            }),
            (0, s.jsxs)("div", {
                className: iH.Qs,
                children: [
                    (0, s.jsx)(e7.D, {
                        variant: "heading-md/semibold",
                        style: { marginTop: 0, marginBottom: "var(--space-4)" },
                        children: t,
                    }),
                    (0, s.jsx)(k.E, { color: "text-muted", className: iH.rf, variant: "text-sm/medium", children: n }),
                ],
            }),
            (0, s.jsx)("div", {
                children: (0, s.jsx)(iP, {
                    guild: i,
                    analyticsLocations: l,
                    analyticsLocation: { page: D.liQ.GUILD_CHANNEL, section: D.JJy.CHANNEL_TEXT_AREA },
                }),
            }),
        ],
    });
}
function iz(e) {
    let { guild: t } = e;
    a.useEffect(() => {
        (0, iM.uh)(ik.M.FIRST_BOOSTER_UPSELL_OVERSEER, { dismissAction: iG.i.AUTO_DISMISS, guildId: t.id });
    }, [t.id]);
    let n = (0, iD.A)(t.id);
    return (0, s.jsx)(iV, {
        title: y.intl.string(iw.default.qGDEON),
        body: y.intl.format(iw.default["s+HTdX"], {
            viewAllPerks: (e) =>
                (0, s.jsx)(n5.D, {
                    tag: "a",
                    role: "link",
                    onClick: () => {
                        n
                            ? (0, iU.A)(t.id, H.A.GUILD_BOOSTING_FIRST_TIME_BOOSTER_UPSELL)
                            : (0, I.K4)({
                                  guildId: t.id,
                                  location: {
                                      section: D.JJy.CHANNEL_TEXT_AREA,
                                      object: D.ZSU.BOOST_ANNOUNCEMENT_UPSELL,
                                  },
                              });
                    },
                    children: e,
                }),
        }),
        guild: t,
        analyticsLocations: [H.A.GUILD_BOOSTING_FIRST_TIME_BOOSTER_UPSELL],
    });
}
function iJ(e) {
    let { boostingPrompt: t, guild: n } = e;
    return t.guildBoostUpsellType === x.Mk.FIRST_BOOSTER ? (0, s.jsx)(iz, { guild: n }) : null;
}
function iK(e) {
    let { boostingPrompt: t, channel: n } = e,
        i = n.guild_id,
        l = (0, d.bG)([et.A], () => et.A.getGuild(i), [i]);
    return null == l
        ? null
        : (0, s.jsx)(_.A, {
              contentClassName: iH.FG,
              iconContainerClassName: iH.zc,
              iconNode: (0, s.jsx)(tW.BellIcon, { colorClass: iH.Kk }),
              children: (0, s.jsx)(iJ, { boostingPrompt: t, guild: l }),
          });
}
var iY = n(565255);
let iW = "this server";
function iX(e) {
    let { message: t, compact: i, guildName: l, onClick: a, onClickGuild: r } = e;
    return (0, s.jsx)(_.A, {
        icon: n(290388),
        timestamp: t.timestamp,
        compact: i,
        contentClassName: iY.B,
        children: y.intl.format(y.t.bYdG3f, { guildName: l ?? iW, onClick: a, onClickGuild: r ?? (() => {}) }),
    });
}
function iZ(e) {
    let { message: t, compact: n, guildName: i, onClickGuild: l } = e;
    return (0, s.jsx)(_.A, {
        iconNode: (0, s.jsx)(n2.E, { size: "custom", width: 20, height: 20, color: "currentColor", className: iY.Q }),
        timestamp: t.timestamp,
        compact: n,
        contentClassName: iY.B,
        children: y.intl.format(y.t.vzfXql, { guildName: i ?? iW, onClickGuild: l ?? (() => {}) }),
    });
}
function iq(e) {
    let { message: t, compact: n, guildName: i, onClickGuild: l } = e;
    return (0, s.jsx)(_.A, {
        iconNode: (0, s.jsx)(n2.E, { size: "custom", width: 20, height: 20, color: "currentColor", className: iY.Q }),
        timestamp: t.timestamp,
        compact: n,
        contentClassName: iY.B,
        children: y.intl.format(y.t["/TfvyR"], { guildName: i ?? iW, onClickGuild: l ?? (() => {}) }),
    });
}
function iQ(e) {
    let { message: t, compact: n, usernameHook: i } = e,
        l = (0, L.Ay)(t),
        a = i(l),
        {
            avatarSrc: r,
            eventHandlers: { onMouseEnter: o, onMouseLeave: d },
        } = nH(!0);
    return (0, s.jsx)("div", {
        onMouseEnter: o,
        onMouseLeave: d,
        children: (0, s.jsx)(_.A, {
            className: eN()(ie.rs, { [ie.oE]: n }),
            iconNode: n ? null : (0, s.jsx)(nB, { src: r }),
            iconContainerClassName: ie.zc,
            compact: n,
            children: (0, s.jsxs)("div", {
                className: eN()(ie.Qs, { [ie.oE]: n }),
                children: [
                    (0, s.jsx)(nb.ix, {
                        message: t,
                        messageClassname: ie.he,
                        className: eN()(ie.QV, ie.he, { [ie.oE]: n }),
                        username: (0, s.jsxs)("div", {
                            className: ie.he,
                            children: [
                                (0, s.jsx)(k.E, {
                                    variant: "text-md/normal",
                                    color: "text-brand",
                                    tag: "span",
                                    className: ie.Xh,
                                    children: y.intl.string(y.t.hG1StD),
                                }),
                                (0, s.jsx)(np.A, { type: nV.nu.SYSTEM_DM, className: ie.Al }),
                            ],
                        }),
                        compact: n,
                        showTimestamp: !0,
                    }),
                    (0, s.jsx)("div", {
                        className: eN()(ie.__invalid_messageContent, { [ie.oE]: n }),
                        children: y.intl.format(y.t.qntXNQ, { username: l.nick, usernameHook: a }),
                    }),
                ],
            }),
        }),
    });
}
function i$(e) {
    let { message: t, compact: n, usernameHook: i, channel: l } = e,
        a = (0, d.bG)([et.A], () => et.A.getGuild(l.guild_id)),
        r = (0, L.Ay)(t),
        o = i(r),
        {
            avatarSrc: c,
            eventHandlers: { onMouseEnter: u, onMouseLeave: m },
        } = nH(!0);
    return (0, s.jsx)("div", {
        onMouseEnter: u,
        onMouseLeave: m,
        children: (0, s.jsx)(_.A, {
            className: eN()(ie.rs, { [ie.oE]: n }),
            iconNode: n ? null : (0, s.jsx)(nB, { src: c }),
            iconContainerClassName: ie.zc,
            compact: n,
            children: (0, s.jsxs)("div", {
                className: eN()(ie.Qs, { [ie.oE]: n }),
                children: [
                    (0, s.jsx)(nb.ix, {
                        message: t,
                        messageClassname: ie.he,
                        className: eN()(ie.QV, ie.he, { [ie.oE]: n }),
                        username: (0, s.jsxs)("div", {
                            className: ie.he,
                            children: [
                                (0, s.jsx)(k.E, {
                                    variant: "text-md/normal",
                                    color: "text-brand",
                                    tag: "span",
                                    className: ie.Xh,
                                    children: y.intl.string(y.t.hG1StD),
                                }),
                                (0, s.jsx)(np.A, { type: nV.nu.SYSTEM_DM, className: ie.Al }),
                            ],
                        }),
                        compact: n,
                        showTimestamp: !0,
                    }),
                    (0, s.jsx)("div", {
                        className: eN()(ie.__invalid_messageContent, { [ie.oE]: n }),
                        children: y.intl.format(y.t.W0UBI3, {
                            username: r.nick,
                            usernameHook: o,
                            guildName: a?.name ?? "",
                        }),
                    }),
                ],
            }),
        }),
    });
}
var i0 = n(959988),
    i1 = n(402216);
function i2(e) {
    let { message: t, channel: n, playingActivity: i, onJoinStream: l, usernameHook: a, compact: r } = e,
        o = (0, L.Ay)(t),
        d = (0, n_.Ay)(n),
        c = t.call?.duration,
        u = a(o),
        m = y.intl.format(y.t.FKXvaI, {
            username: o.nick,
            activityName: null != i ? i.name : "unknown",
            onJoinStream: l,
            usernameHook: u,
        });
    return (
        null != c &&
            (m = y.intl.format(y.t.NEFxtd, {
                username: o.nick,
                duration: c.humanize(),
                channelName: d ?? "",
                usernameHook: u,
            })),
        (0, s.jsx)(_.A, {
            iconNode:
                null != c
                    ? (0, s.jsx)(i0.G, { size: "custom", color: "currentColor", width: 20, height: 20 })
                    : (0, s.jsx)(i1.Ay, { size: i1.Ay.Sizes.SMALL }),
            timestamp: t.timestamp,
            compact: r,
            children: m,
        })
    );
}
var i3 = n(687966),
    i5 = n(769015),
    i6 = n(234003);
function i7(e) {
    let { message: t, channel: n, author: i, compact: l } = e,
        { nick: a } = (0, L.d8)(i, n),
        r = (0, C.P)({ user: i, channelId: n.id, guildId: void 0, messageId: void 0 })(),
        o = (0, i_.h)(t.applicationId);
    if (null == o) return null;
    let d = y.intl.format(y.t.m7Lwas, {
        username: a,
        usernameHook: r,
        gameName: o.name,
        gameIconHook: (e) =>
            (0, s.jsxs)("span", {
                className: i6.Y_,
                children: [(0, s.jsx)(i5.A, { game: o, size: i5.M.XXSMALL, className: i6.p4 }), " ", e],
            }),
        helpdeskArticle: e4.A.getArticleURL(D.MVz.SOCIAL_LAYER_CONNECTIONS),
    });
    return (0, s.jsx)(_.A, {
        iconNode: (0, s.jsx)(i3.GameControllerIcon, { size: "sm" }),
        compact: l,
        contentClassName: i6.Qs,
        children: (0, s.jsx)("div", { children: d }),
    });
}
function i9(e) {
    let { message: t, otherUsername: i, usernameHook: l, otherUsernameHook: a, compact: r } = e,
        { nick: o } = (0, L.Ay)(t),
        d = l(),
        c = a(),
        u = y.intl.format(y.t.MMN2Jq, { username: o, usernameHook: d, otherUsername: i, otherUsernameHook: c });
    return (0, s.jsx)(_.A, { icon: n(617184), timestamp: t.timestamp, compact: r, children: u });
}
function i8(e) {
    let t,
        { message: i, usernameHook: l, otherUser: a, otherUsernameHook: r, compact: o, channel: d } = e,
        c = (0, L.Ay)(i),
        u = c.nick,
        m = l(c),
        h = (0, L.d8)(a, d);
    if (null != h && null != r) {
        let e = r(h);
        t = y.intl.format(y.t.L2FyVq, { username: u, usernameHook: m, otherUsername: h.nick, otherUsernameHook: e });
    } else t = y.intl.format(y.t["5v2xa8"], { username: u, usernameHook: m });
    return (0, s.jsx)(_.A, { icon: n(884797), timestamp: i.timestamp, compact: o, children: t });
}
var i4 = n(451394),
    le = n(598490);
function lt(e) {
    let { message: t, compact: n, usernameHook: i } = e,
        l = (0, L.Ay)(t),
        a = i(l),
        r = y.intl.format(y.t["zla/ux"], { username: l.nick, usernameHook: a, topic: t.content });
    return (0, s.jsx)(_.A, {
        className: le.d,
        iconNode: (0, s.jsx)(i4.q, { size: "md", color: "currentColor" }),
        iconContainerClassName: le.z,
        timestamp: t.timestamp,
        compact: n,
        children: r,
    });
}
var ln = n(297152);
function li(e) {
    let { message: t, compact: n, usernameHook: i } = e,
        l = (0, L.Ay)(t),
        a = i(l),
        r = y.intl.format(y.t.tv2DNy, { username: l.nick, usernameHook: a });
    return (0, s.jsx)(_.A, {
        className: le.d,
        iconNode: (0, s.jsx)(ln.E, { size: "md", color: "currentColor" }),
        iconContainerClassName: le.z,
        timestamp: t.timestamp,
        compact: n,
        children: r,
    });
}
function ll(e) {
    let { message: t, compact: n, usernameHook: i } = e,
        l = (0, L.Ay)(t),
        a = i(l),
        r = y.intl.format(y.t["dKW5C+"], { username: l.nick, usernameHook: a });
    return (0, s.jsx)(_.A, {
        className: le.d,
        iconNode: (0, s.jsx)(m.L, { size: "md", color: "currentColor" }),
        iconContainerClassName: le.z,
        timestamp: t.timestamp,
        compact: n,
        children: r,
    });
}
function ls(e) {
    let { message: t, compact: n, usernameHook: i } = e,
        l = (0, L.Ay)(t),
        a = i(l),
        r = y.intl.format(y.t["Rv+TSM"], { username: l.nick, usernameHook: a, topic: t.content });
    return (0, s.jsx)(_.A, {
        className: le.d,
        iconNode: (0, s.jsx)(i4.q, { size: "md", color: eg.A.unsafe_rawColors.GREEN_360.css }),
        iconContainerClassName: le.z,
        timestamp: t.timestamp,
        compact: n,
        children: r,
    });
}
function la(e) {
    let { message: t, compact: n, usernameHook: i } = e,
        l = (0, L.Ay)(t),
        a = i(l),
        r = y.intl.format(y.t.Yy6vLs, { username: l.nick, usernameHook: a, topic: t.content });
    return (0, s.jsx)(_.A, {
        className: le.d,
        iconNode: (0, s.jsx)(i4.q, { size: "md", color: "currentColor" }),
        iconContainerClassName: le.z,
        timestamp: t.timestamp,
        compact: n,
        children: r,
    });
}
var lr = n(163328),
    lo = n(562534);
function ld(e) {
    let {
            message: t,
            compact: n,
            usernameHook: i,
            onClickThread: l,
            onClickViewThreads: a,
            onContextMenuThread: r,
        } = e,
        o = (0, L.Ay)(t),
        c = i(o),
        u = (0, d.bG)([tF.A], () => tF.A.getChannel(t.messageReference?.channel_id)),
        m = (0, n_.Ay)(u),
        h = y.intl.format(y.t.cZ9Uf2, {
            actorName: o.nick,
            actorHook: c,
            threadName: m ?? t.content,
            threadOnClick: { onClick: l, onContextMenu: r },
            viewThreadsOnClick: a,
        });
    return (0, s.jsx)(_.A, {
        iconNode: (0, s.jsx)(lr.y, { size: "md", color: "currentColor", className: lo.K }),
        timestamp: t.timestamp,
        compact: n,
        children: h,
    });
}
function lc(e) {
    let { message: t, channel: i, targetUser: l, actorUsernameHook: a, targetUsernameHook: r, compact: o } = e,
        d = (0, L.Ay)(t),
        c = (0, L.d8)(l, i),
        u = a(d),
        m = r(c ?? void 0),
        h = y.intl.format(y.t.tusv2h, { actorName: d.nick, actorHook: u, targetName: c?.nick, targetHook: m });
    return (0, s.jsx)(_.A, { icon: n(617184), timestamp: t.timestamp, compact: o, children: h });
}
function lu(e) {
    let { message: t, channel: i, targetUser: l, actorUsernameHook: a, targetUsernameHook: r, compact: o } = e,
        d = (0, L.Ay)(t),
        c = (0, L.d8)(l, i),
        u = a(d),
        m = r(c ?? void 0),
        h = y.intl.format(y.t["32QI5/"], { actorName: d.nick, actorHook: u, targetName: c?.nick, targetHook: m });
    return (0, s.jsx)(_.A, { icon: n(884797), timestamp: t.timestamp, compact: o, children: h });
}
var lm = n(961934),
    lh = n(861464);
function lg(e) {
    let { message: t, usernameHook: i, compact: l } = e,
        a = (0, L.Ay)(t),
        r = i(a),
        o = lh.A.getSystemMessageUserJoin(t.id),
        d = y.intl.format(o, { username: a.nick, usernameHook: r });
    return (0, s.jsx)(_.A, { icon: n(617184), timestamp: t.timestamp, compact: l, children: d });
}
var lp = n(776310),
    lA = n(132500),
    lx = n(319060),
    lf = n(544048),
    lE = n(844222),
    lI = n(21161);
let lC = (0, n(945810).mj)({
    name: "2026-03-new-server-boost-system-messages",
    kind: "user",
    defaultConfig: { enabled: !1, showCta: !0 },
    variations: { 1: { enabled: !0, showCta: !0 }, 2: { enabled: !0, showCta: !1 } },
});
var l_ = n(513609),
    lv = n(512599);
function lN(e) {
    let t = Number(e.content);
    return isNaN(t) || 0 === t ? 1 : t;
}
var lj = n(780964),
    lT = n(766075),
    lS = n(473145),
    ly = n(473193),
    lb = n(889158);
function lR(e) {
    let t = (0, iD.A)(e);
    return a.useCallback(() => {
        null != e &&
            (t
                ? (0, iU.A)(e, H.A.GUILD_BOOSTING_SYSTEM_MESSAGE)
                : (0, I.K4)({
                      guildId: e,
                      location: { section: D.JJy.CHANNEL_TEXT_AREA, object: D.ZSU.BOOST_ANNOUNCEMENT_UPSELL },
                  }));
    }, [e, t]);
}
function lk(e) {
    let { className: t, animate: n } = e;
    return (0, s.jsx)("div", {
        className: t,
        children: (0, s.jsx)("img", { className: lb.fj, src: n ? iB : iF, alt: "", "aria-hidden": !0 }),
    });
}
function lM(e) {
    let { title: t, body: n } = e;
    return (0, s.jsxs)("div", {
        className: lb.Qs,
        children: [
            (0, s.jsx)(k.E, { variant: "text-md/semibold", scaleFontToUserSetting: !0, className: lb.DD, children: t }),
            (0, s.jsx)(k.E, { variant: "text-sm/medium", scaleFontToUserSetting: !0, className: lb.rf, children: n }),
        ],
    });
}
function lL(e) {
    let { guild: t, firstBooster: n } = e;
    return (0, s.jsx)("div", {
        className: lb.o1,
        children: (0, s.jsx)(iP, {
            guild: t,
            variant: "secondary",
            analyticsLocation: {
                page: D.liQ.GUILD_CHANNEL,
                section: D.JJy.CHANNEL_TEXT_AREA,
                object: D.ZSU.BOOST_ANNOUNCEMENT_UPSELL,
            },
            analyticsLocations: [
                n
                    ? H.A.GUILD_BOOSTING_ANNOUNCEMENT_MESSAGE_FIRST_TIME_BOOSTER
                    : H.A.GUILD_BOOSTING_ANNOUNCEMENT_MESSAGE,
            ],
        }),
    });
}
function lO(e) {
    let { guild: t, children: n } = e,
        i = lR(t?.id);
    return (0, s.jsx)(n5.D, { tag: "a", role: "link", className: lb.oT, onClick: i, children: n });
}
function lP(e) {
    let t,
        n,
        { message: i, guild: l, usernameHook: a, showCta: o } = e,
        c = ((t = (0, d.bG)([M.Ay], () => M.Ay.useReducedMotion)), (n = r.useContext(ly.C)?.animate ?? !1), !t && n),
        u = (0, L.Ay)(i),
        m = a(u),
        h = i.hasFlag(D.pr7.IS_FIRST_BOOSTER),
        g = lR(l?.id),
        p = h
            ? y.intl.format(y.t["/1IQGD"], { username: u.nick, usernameHook: m })
            : y.intl.format(y.t.SbSWvY, { username: u.nick, usernameHook: m, numSubscriptions: lN(i) }),
        A = o
            ? y.intl.format(y.t.dWm8Iu, { learnMoreHook: (e) => (0, s.jsx)(lO, { guild: l, children: e }) })
            : y.intl.string(y.t["0Mdw0t"]),
        x = (0, s.jsxs)("div", {
            className: lb.kL,
            children: [
                (0, s.jsx)(lk, { className: lb.rc, animate: c }),
                (0, s.jsx)(lM, { title: p, body: A }),
                o && null != l && (0, s.jsx)(lL, { guild: l, firstBooster: h }),
            ],
        }),
        f = (0, s.jsx)(iL._, { className: lb.Kk });
    return (0, s.jsx)(_.A, {
        contentClassName: lb.$O,
        iconNode: f,
        iconContainerClassName: lb.zc,
        children: o ? x : (0, s.jsx)(n5.D, { className: lb.w8, onClick: g, children: x }),
    });
}
var lD = n(50826);
let lU = {
    enter: { BEG: 0, END: 22 },
    confetti: { BEG: 23, END: 119 },
    leaf_peel: { BEG: 120, END: 160 },
    leaf_fall: { BEG: 161, END: 163 },
    exit: { BEG: 164, END: 200 },
};
var lG =
    (((l = {}).TOP_LEFT = "TOP_LEFT"),
    (l.TOP_RIGHT = "TOP_RIGHT"),
    (l.BOTTOM_LEFT = "BOTTOM_LEFT"),
    (l.BOTTOM_RIGHT = "BOTTOM_RIGHT"),
    l);
let lw = ["TOP_LEFT", "TOP_RIGHT"],
    lH = (0, ej.xI)(lx.A.USER_PREMIUM_GUILD_SUBSCRIPTION_EASTER_EGG_SIZE),
    lB = { leafPosition: { x: 85, y: 125 }, leafRotationDirection: 1 },
    lF = Object.freeze({
        TOP_LEFT: {
            getConfettiPosition: (e) => ({ x: e - 11, y: e - 125 }),
            confettiVelocityDirection: { x: 1, y: 1 },
            leafPosition: { x: 100, y: 144 },
            leafRotationDirection: 1,
        },
        TOP_RIGHT: {
            getConfettiPosition: (e) => ({ x: 11, y: e - 125 }),
            confettiVelocityDirection: { x: -1, y: 1 },
            leafPosition: { x: 90, y: 144 },
            leafRotationDirection: -1,
        },
        BOTTOM_LEFT: {
            ...lB,
            getConfettiPosition: (e) => ({ x: e - 11, y: 125 }),
            confettiVelocityDirection: { x: 1, y: -1 },
        },
        BOTTOM_RIGHT: {
            ...lB,
            getConfettiPosition: (e) => ({ x: 11, y: 125 }),
            confettiVelocityDirection: { x: -1, y: -1 },
        },
    }),
    lV = "falling-leaf",
    lz = ["#61D5B2"],
    lJ = n(80705),
    lK = n(232460),
    lY = [lJ, lK];
function lW() {
    return n
        .e("698150")
        .then(n.t.bind(n, 633343, 19))
        .then((e) => {
            let { default: t } = e;
            return t;
        });
}
function lX(e) {
    let { onAnimationComplete: t, onClick: n, position: i, size: l } = e,
        r = a.useRef(null),
        [o, d] = a.useState(null),
        [c] = a.useState(
            i ??
                (function () {
                    switch (Math.floor(Math.random() * Object.keys(lG).length)) {
                        case 0:
                            return "TOP_LEFT";
                        case 2:
                            return "TOP_RIGHT";
                        case 3:
                            return "BOTTOM_LEFT";
                        default:
                            return "BOTTOM_RIGHT";
                    }
                })(),
        ),
        { createMultipleConfettiAt: u, confettiCanvas: m } = a.useContext(lI.x),
        [h, g] = a.useState(null),
        p = (0, lp.f9)(m, h),
        A = (function (e, t) {
            if (null == e) return "enter";
            switch (e) {
                case "enter":
                    return "confetti";
                case "confetti":
                    if (lw.includes(t)) return "leaf_peel";
                    return "exit";
                case "leaf_peel":
                    return "leaf_fall";
                case "leaf_fall":
                    return "exit";
                case "exit":
                    return "enter";
            }
        })(o, c),
        x = lw.includes(c),
        f = x && "exit" === o,
        E = a.useCallback((e) => {
            d(e);
        }, []),
        I = a.useCallback(() => {
            "exit" === o && t?.();
        }, [t, o]),
        C = a.useCallback((e) => {
            r.current = e;
        }, []);
    return (
        a.useEffect(() => {
            if ("confetti" === o) {
                let { confettiVelocityDirection: e } = lF[c],
                    t = (function (e, t) {
                        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : lH,
                            i = e?.getBoundingClientRect();
                        if (null == i) return { x: 0, y: 0 };
                        let l = lF[t].getConfettiPosition(n);
                        return { x: i.left + l.x, y: i.top + l.y };
                    })(r.current, c, l);
                u(t.x, t.y, {
                    velocity: {
                        type: "static-random",
                        minValue: { x: 10 * e.x, y: 80 * e.y },
                        maxValue: { x: 80 * e.x, y: 180 * e.y },
                    },
                });
            }
        }, [u, c, o, l]),
        a.useEffect(() => {
            if (x && "leaf_fall" === o) {
                let e = lF[c].leafRotationDirection;
                p.createConfetti(
                    {
                        id: `${lV}-${(0, lA.A)()}`,
                        position: {
                            type: "static",
                            value: (function (e, t) {
                                let n = e?.getBoundingClientRect();
                                if (null == n) return { x: 0, y: 0 };
                                let i = lF[t];
                                return { x: n.left + i.leafPosition.x, y: n.top + i.leafPosition.y };
                            })(r.current, c),
                        },
                        size: { type: "static", value: 45 },
                        rotation: {
                            type: "linear-random",
                            minValue: { x: 0, y: 0, z: 0 },
                            maxValue: { x: 0, y: 0, z: 0 },
                            minAddValue: { x: 0, y: 0, z: 8 * e },
                            maxAddValue: { x: 0, y: 0, z: 12 * e },
                        },
                    },
                    { sprite: "TOP_LEFT" === c ? lJ : lK },
                );
            }
        }, [x, p, c, o]),
        (0, s.jsxs)(s.Fragment, {
            children: [
                (0, s.jsx)(lp.K_, { ref: g, sprites: lY, colors: lz, spriteWidth: 45, spriteHeight: 45 }),
                (0, s.jsx)(n5.D, {
                    onClick: n,
                    className: eN()(lD.FT, {
                        [lD.FZ]: "TOP_LEFT" === c,
                        [lD.S]: "TOP_RIGHT" === c,
                        [lD.Re]: "BOTTOM_LEFT" === c,
                        [lD._t]: "BOTTOM_RIGHT" === c,
                    }),
                    children: (0, s.jsx)(lf.t, {
                        animationRef: C,
                        className: eN()(lD.oQ, { [lD.EG]: f }),
                        nextScene: A,
                        sceneSegments: lU,
                        onScenePlay: E,
                        onSceneComplete: I,
                        importData: lW,
                        pauseWhileUnfocused: !1,
                    }),
                }),
            ],
        })
    );
}
function lZ(e) {
    let t,
        { message: n, compact: i, guild: l, usernameHook: r, onClickMessage: o } = e,
        d = (function (e) {
            switch (e.type) {
                case D.lAJ.GUILD_BOOST_TIER_1:
                    return D.TVA.TIER_1;
                case D.lAJ.GUILD_BOOST_TIER_2:
                    return D.TVA.TIER_2;
                case D.lAJ.GUILD_BOOST_TIER_3:
                    return D.TVA.TIER_3;
            }
            return null;
        })(n),
        c = lN(n),
        { createMultipleConfettiAt: u, addClickListener: m } = a.useContext(lI.x),
        [h, g] = a.useState(!1),
        p = a.useRef(null),
        { reducedMotion: A } = a.useContext(lE.C),
        x = (0, L.Ay)(n),
        f = x.nick,
        E = r(x);
    t =
        null == d || null == l
            ? c > 1
                ? y.intl.format(y.t.yfC9ds, { username: f, usernameHook: E, numSubscriptions: c })
                : y.intl.format(y.t["57St/7"], { username: f, usernameHook: E })
            : c > 1
              ? y.intl.format(y.t.PO9uJD, {
                    username: f,
                    usernameHook: E,
                    numSubscriptions: c,
                    guildName: l.name,
                    newTierName: (0, lS.gb)(d),
                })
              : y.intl.format(y.t.cUfTTE, {
                    username: f,
                    usernameHook: E,
                    guildName: l.name,
                    newTierName: (0, lS.gb)(d),
                });
    let I = a.useCallback(() => {
            if (!A.enabled)
                if (h || 0 !== Math.floor(50 * Math.random())) {
                    let e = p.current?.getBoundingClientRect();
                    if (null == e) return;
                    u(e.left + e.width / 2, e.top + e.height / 2);
                } else g(!0);
        }, [u, A, h]),
        C = a.useCallback(() => {
            g(!1);
        }, []),
        v = a.useCallback(() => {
            ((0, lv.O9)({ settingsVisible: !0 }), (0, lT.openUserSettings)(lj.X.POGGERMODE_PANEL), g(!1));
        }, []),
        N = a.useCallback(
            (e, t) => {
                t?.id.startsWith(lV) && v();
            },
            [v],
        );
    a.useEffect(() => m(N));
    let j = a.useCallback(
            (e) => {
                e.target === e.currentTarget && o(e);
            },
            [o],
        ),
        T = (0, s.jsx)(n5.D, {
            className: lD.P0,
            innerRef: p,
            onClick: o,
            children: (0, s.jsx)(iL._, {
                color: eg.A.unsafe_rawColors.GUILD_BOOSTING_PINK,
                className: lD.Kk,
                onMouseEnter: I,
            }),
        });
    return (0, s.jsxs)(_.A, {
        iconNode: T,
        timestamp: n.timestamp,
        compact: i,
        children: [
            (0, s.jsx)("div", { onClick: j, className: lD.iU, children: t }),
            h
                ? (0, s.jsx)(l_.Ay, {
                      children: (0, s.jsx)("div", {
                          className: lD.LK,
                          children: (0, s.jsx)(lX, { onAnimationComplete: C, onClick: v }),
                      }),
                  })
                : null,
        ],
    });
}
function lq(e) {
    let { message: t, compact: n, guild: i, usernameHook: l } = e,
        { enabled: a, showCta: r } = lC.useConfig({ location: "UserPremiumGuildSubscription" });
    return t.type === D.lAJ.GUILD_BOOST && a && !n
        ? (0, s.jsx)(lP, { message: t, guild: i, usernameHook: l, showCta: r })
        : (0, s.jsx)(lZ, { ...e });
}
var lQ = n(305866),
    l$ = n(364522),
    l0 = n(922016),
    l1 = n(983851),
    l2 = n(61230),
    l3 = n(538451),
    l5 = n(944052),
    l6 = n(461154);
function l7(e) {
    let { users: t, guildId: n, channelId: i } = e;
    return (0, s.jsx)(lQ.l, {
        className: l6.XM,
        children: (0, s.jsx)(l$.Ip, {
            className: l6.XG,
            children: (0, s.jsx)("div", {
                children: t.map((e) =>
                    (0, s.jsx)(
                        l3.A,
                        { user: e, guildId: n ?? void 0, channelId: i, nick: tK.Ay.getNickname(n, i, e) },
                        e.id,
                    ),
                ),
            }),
        }),
    });
}
function l9(e) {
    let { message: t, channel: n, compact: i } = e,
        l = (0, im.A)(t),
        r = (0, l5.X7)(t),
        o = t.messageReference?.channel_id,
        c = (0, d.bG)([tF.A], () => tF.A.getChannel(o)),
        u = (function (e, t, n, i, l, r) {
            let o = (0, C.P)({ user: n, channelId: t.id, guildId: t.guild_id, messageId: e.id }),
                d = (0, C.P)({ user: i[0], channelId: t.id, guildId: t.guild_id, messageId: e.id }),
                c = (0, C.P)({ user: i[1], channelId: t.id, guildId: t.guild_id, messageId: e.id }),
                u = (0, L.Ay)(e),
                [m, h] = i,
                g = (0, L.d8)(m, t),
                p = (0, L.d8)(h, t),
                A = (function (e, t) {
                    let n = a.useRef(null),
                        [i, l] = a.useState(!1),
                        r = a.useCallback((n) => (0, s.jsx)(l7, { users: n, guildId: e, channelId: t }), [e, t]);
                    return a.useCallback(
                        (e) => (t, a) =>
                            (0, s.jsx)(
                                l0.Y,
                                {
                                    targetElementRef: n,
                                    renderPopout: () => r(e),
                                    shouldShow: i,
                                    position: "bottom",
                                    onRequestClose: () => l(!1),
                                    children: (e) =>
                                        (0, s.jsx)(n5.D, {
                                            ...e,
                                            tag: "a",
                                            style: { display: "inline" },
                                            innerRef: n,
                                            onClick: () => {
                                                l((e) => !e);
                                            },
                                            children: t,
                                        }),
                                },
                                a,
                            ),
                        [i, r],
                    );
                })(t.guild_id, t.id),
                x = a.useCallback(
                    (e, t) =>
                        null == r
                            ? e
                            : (0, s.jsx)(
                                  l2.T,
                                  {
                                      channel: r,
                                      childWrapperClassName: l6.c6,
                                      children: (0, s.jsx)(n5.D, { tag: "a", children: e }),
                                  },
                                  t,
                              ),
                    [r],
                );
            return null == l
                ? y.intl.format(y.t["eX6e/3"], { username: u.nick, usernameHook: o(u), channelHook: x })
                : y.intl.format(y.t.YUbgR8, {
                      userCount: i.length + 1,
                      username: u.nick,
                      usernameHook: o(u),
                      username2: g.nick,
                      username2Hook: d(g),
                      username3: p.nick,
                      username3Hook: c(p),
                      otherCount: i.length - 1,
                      othersHook: A([n, ...i]),
                      duration: l,
                  });
        })(t, n, t.author, r, l, c),
        m = a.useMemo(() => {
            let e = (0, s.jsx)(l1.H, { size: "md", color: eg.A.colors.STATUS_POSITIVE });
            return null == c || null != l
                ? e
                : (0, s.jsx)(l2.T, {
                      channel: c,
                      children: (0, s.jsx)(l1.H, { size: "md", color: eg.A.colors.STATUS_POSITIVE }),
                  });
        }, [c, l]);
    return (0, s.jsx)(_.A, { iconNode: m, timestamp: t.timestamp, compact: i, children: u });
}
var l8 = n(325278);
function l4(e) {
    let { message: t, channel: n, compact: i } = e,
        { author: l } = t,
        { guild_id: r } = n,
        o = t.getChannelId(),
        c = (0, d.bG)([et.A], () => et.A.getGuild(r), [r]),
        u = a.useCallback(() => {
            null != c &&
                (0, I.K4)({
                    guildId: c.id,
                    location: { section: D.JJy.CHANNEL_TEXT_AREA, object: D.ZSU.BOOST_ANNOUNCEMENT_UPSELL },
                });
        }, [c]),
        m = (0, C.P)({ user: l, channelId: o, guildId: n.guild_id, messageId: t.id, stopPropagation: !0 });
    return (0, s.jsx)(lq, { message: t, compact: i, guild: c, usernameHook: m, onClickMessage: u });
}
function se(e) {
    let t = e.getChannelId(),
        n = (0, d.bG)([tF.A], () => tF.A.getChannel(t), [t]),
        i = (null != n ? n.getGuildId() : null) ?? e.messageReference?.guild_id ?? null,
        l = (0, d.bG)([et.A], () => (null != i ? et.A.getGuild(i) : null), [i]),
        s =
            null == i
                ? void 0
                : () => {
                      (0, v.uh)(i);
                  };
    return { guildId: i, guildName: l?.name ?? null, onClickGuild: s };
}
function st(e) {
    let { message: t, compact: n, channel: i } = e,
        l = (0, C.P)({ user: t.author, channelId: i.id, guildId: i.guild_id, messageId: t.id });
    return (0, s.jsx)(iR, { message: t, compact: n, usernameHook: l });
}
let sn = Object.freeze({
        [D.lAJ.DEFAULT]: void 0,
        [D.lAJ.REPLY]: void 0,
        [D.lAJ.CHAT_INPUT_COMMAND]: void 0,
        [D.lAJ.CONTEXT_MENU_COMMAND]: void 0,
        [D.lAJ.RECIPIENT_ADD]: function (e) {
            let { message: t, channel: n, compact: i } = e,
                { author: l } = t,
                a = t.getChannelId(),
                r = (0, d.bG)([T.default], () => T.default.getUser(t.mentions[0]), [t]),
                o = tK.Ay.getName(null, a, r),
                c = (0, C.P)({ user: l, channelId: a, guildId: n.guild_id, messageId: t.id }),
                u = (0, C.P)({ user: r, channelId: a, guildId: n.guild_id, messageId: t.id });
            return n.isThread()
                ? (0, s.jsx)(lc, {
                      message: t,
                      channel: n,
                      compact: i,
                      targetUser: r,
                      actorUsernameHook: c,
                      targetUsernameHook: u,
                  })
                : (0, s.jsx)(i9, { message: t, compact: i, otherUsername: o, usernameHook: c, otherUsernameHook: u });
        },
        [D.lAJ.RECIPIENT_REMOVE]: function (e) {
            let { message: t, channel: n, compact: i } = e,
                { author: l } = t,
                a = t.getChannelId(),
                r = (0, d.bG)([T.default], () => T.default.getUser(t.mentions[0]), [t]),
                o = (0, C.P)({ user: l, channelId: a, guildId: n.guild_id, messageId: t.id }),
                c = (0, C.P)({ user: r, channelId: a, guildId: n.guild_id, messageId: t.id });
            return n.isThread()
                ? (0, s.jsx)(lu, {
                      message: t,
                      channel: n,
                      compact: i,
                      targetUser: r,
                      actorUsernameHook: o,
                      targetUsernameHook: c,
                  })
                : null != r && r.id !== l.id
                  ? (0, s.jsx)(i8, {
                        message: t,
                        channel: n,
                        compact: i,
                        usernameHook: o,
                        otherUser: r,
                        otherUsernameHook: c,
                    })
                  : (0, s.jsx)(i8, { message: t, channel: n, compact: i, usernameHook: o });
        },
        [D.lAJ.CALL]: function (e) {
            let { message: t, compact: n, channel: i } = e,
                { id: l, author: r } = t,
                o = N.default.getId(),
                c = t.getChannelId(),
                u = (0, d.bG)([tB.A], () => tB.A.isCallActive(c, l), [c, l]),
                m = (0, d.bG)([tJ.A], () => tJ.A.getVoiceState(D.ME, o)),
                h = !u && null != t.call && !t.call.participants.includes(o),
                g = u && (null == m || m.channelId !== c),
                A = a.useCallback(() => p.default.selectVoiceChannel(c), [c]),
                x = (0, C.P)({
                    user: r,
                    channelId: c,
                    guildId: i.guild_id,
                    messageId: t.id,
                    enableDisplayNameStyles: !0,
                });
            return (0, s.jsx)(ih, {
                compact: n,
                message: t,
                missed: h,
                joinable: g,
                usernameHook: x,
                onClickJoinCall: A,
            });
        },
        [D.lAJ.CHANNEL_NAME_CHANGE]: function (e) {
            let { message: t, compact: n, channel: i } = e,
                { author: l } = t,
                a = t.getChannelId(),
                r = (0, C.P)({ user: l, channelId: a, guildId: i.guild_id, messageId: t.id });
            return (0, s.jsx)(ij, { compact: n, message: t, usernameHook: r, isForumPost: i.isForumPost() });
        },
        [D.lAJ.CHANNEL_ICON_CHANGE]: function (e) {
            let { message: t, compact: n, channel: i } = e,
                { author: l } = t,
                a = t.getChannelId(),
                r = (0, C.P)({ user: l, channelId: a, guildId: i.guild_id, messageId: t.id });
            return (0, s.jsx)(iI, { compact: n, message: t, usernameHook: r });
        },
        [D.lAJ.CHANNEL_PINNED_MESSAGE]: function (e) {
            let { message: t, compact: n, channel: i } = e,
                { author: l } = t,
                r = t.getChannelId(),
                o = a.useCallback(() => {
                    if (tz.Ay.getChannelId() !== r) {
                        let e = tF.A.getChannel(r);
                        null != e && (0, v.uh)(e.guild_id, e.id);
                    }
                    setTimeout(() => eF._.dispatch(D.jej.TOGGLE_CHANNEL_PINS), 0);
                }, [r]),
                d = (0, C.P)({ user: l, channelId: r, guildId: i.guild_id, messageId: t.id });
            return (0, s.jsx)(iS, { message: t, compact: n, usernameHook: d, onClickPins: __OVERLAY__ ? null : o });
        },
        [D.lAJ.USER_JOIN]: function (e) {
            let { message: t, compact: n, channel: i } = e,
                { author: l } = t,
                a = t.getChannelId(),
                r = (0, C.P)({ user: l, channelId: a, guildId: i.guild_id, messageId: t.id });
            return (0, s.jsxs)(s.Fragment, {
                children: [
                    (0, s.jsx)(lg, { message: t, compact: n, usernameHook: r }),
                    (0, s.jsx)(tH, { channel: i, message: t }),
                ],
            });
        },
        [D.lAJ.GUILD_BOOST]: l4,
        [D.lAJ.GUILD_BOOST_TIER_1]: l4,
        [D.lAJ.GUILD_BOOST_TIER_2]: l4,
        [D.lAJ.GUILD_BOOST_TIER_3]: l4,
        [D.lAJ.CHANNEL_FOLLOW_ADD]: function (e) {
            let { message: t, compact: n, channel: i } = e,
                { author: l } = t,
                a = t.getChannelId(),
                r = (0, C.P)({ user: l, channelId: a, guildId: i.guild_id, messageId: t.id });
            return (0, s.jsx)(iA, { message: t, compact: n, usernameHook: r });
        },
        [D.lAJ.GUILD_STREAM]: function (e) {
            let { message: t, compact: n, channel: i } = e,
                {
                    author: l,
                    author: { id: r },
                    messageReference: o,
                } = t,
                c = t.getChannelId(),
                u = (0, d.bG)([tV.A], () => tV.A.findActivity(r, (e) => e.type === D.$pd.PLAYING), [r]),
                m = (0, d.bG)([tF.A], () => (null != o ? tF.A.getChannel(o.channel_id) : null), [o]),
                h = o?.guild_id,
                g = (0, C.P)({ user: l, channelId: c, guildId: i.guild_id, messageId: t.id }),
                p = a.useCallback(() => {
                    null != m &&
                        null != h &&
                        (0, A.Nl)({ streamType: l8.U4.GUILD, ownerId: r, channelId: m.id, guildId: h });
                }, [r, m, h]);
            return null != o && null != m && null != o.guild_id
                ? (0, s.jsx)(i2, {
                      message: t,
                      compact: n,
                      channel: m,
                      playingActivity: u,
                      onJoinStream: p,
                      usernameHook: g,
                  })
                : null;
        },
        [D.lAJ.GUILD_DISCOVERY_DISQUALIFIED]: function (e) {
            let { message: t, compact: n } = e,
                { guildId: i, guildName: l, onClickGuild: a } = se(t);
            return (0, s.jsx)(iX, {
                message: t,
                compact: n,
                guildName: l,
                onClick: function () {
                    null != i && em.A.open(i, D.BEX.ACCESS, D.nd0.ACCESS_DISCOVERABLE);
                },
                onClickGuild: a,
            });
        },
        [D.lAJ.GUILD_DISCOVERY_REQUALIFIED]: function (e) {
            let { message: t, compact: i } = e;
            return (0, s.jsx)(_.A, {
                icon: n(222548),
                timestamp: t.timestamp,
                compact: i,
                contentClassName: iY.B,
                children: y.intl.string(y.t.tu6tOR),
            });
        },
        [D.lAJ.GUILD_DISCOVERY_GRACE_PERIOD_INITIAL_WARNING]: function (e) {
            let { message: t, compact: n } = e,
                { guildName: i, onClickGuild: l } = se(t);
            return (0, s.jsx)(iZ, { message: t, compact: n, guildName: i, onClickGuild: l });
        },
        [D.lAJ.GUILD_DISCOVERY_GRACE_PERIOD_FINAL_WARNING]: function (e) {
            let { message: t, compact: n } = e,
                { guildName: i, onClickGuild: l } = se(t);
            return (0, s.jsx)(iq, { message: t, compact: n, guildName: i, onClickGuild: l });
        },
        [D.lAJ.THREAD_CREATED]: function (e) {
            let { message: t, channel: i, compact: l } = e,
                r = (0, C.P)({ user: t.author, channelId: t.channel_id, guildId: i.guild_id, messageId: t.id }),
                o = a.useCallback(
                    async (e) => {
                        let n = t.messageReference?.channel_id;
                        if (null != n) {
                            await tP.A.loadThread(n);
                            let t = tF.A.getChannel(n);
                            null != t && (0, tD.JA)(t, e.shiftKey);
                        }
                    },
                    [t],
                ),
                d = a.useCallback(() => {
                    (0, c.openModalLazy)(async () => {
                        let { default: e } = await Promise.all([
                            n.e("327744"),
                            n.e("802598"),
                            n.e("242266"),
                            n.e("552705"),
                            n.e("751743"),
                            n.e("384042"),
                            n.e("65225"),
                        ]).then(n.bind(n, 126768));
                        return (t) => (0, s.jsx)(e, { channel: i, ...t });
                    });
                }, [i]),
                u = a.useCallback(
                    (e) => {
                        let i = tF.A.getChannel(t.messageReference?.channel_id);
                        null != i &&
                            (0, h.L3)(e, async () => {
                                let { default: e } = await Promise.all([
                                    n.e("926132"),
                                    n.e("391763"),
                                    n.e("955557"),
                                    n.e("603998"),
                                    n.e("947502"),
                                    n.e("343266"),
                                    n.e("965789"),
                                    n.e("412255"),
                                    n.e("896804"),
                                    n.e("63340"),
                                    n.e("21106"),
                                    n.e("421060"),
                                    n.e("368358"),
                                    n.e("699011"),
                                    n.e("65200"),
                                    n.e("285802"),
                                    n.e("703869"),
                                    n.e("51212"),
                                    n.e("584615"),
                                ]).then(n.bind(n, 612826));
                                return (t) => (0, s.jsx)(e, { ...t, channel: i });
                            });
                    },
                    [t],
                );
            return (0, s.jsx)(ld, {
                message: t,
                compact: l,
                usernameHook: r,
                onClickThread: o,
                onClickViewThreads: d,
                onContextMenuThread: u,
            });
        },
        [D.lAJ.THREAD_STARTER_MESSAGE]: function (e) {
            let { message: t, compact: n } = e;
            return (0, s.jsx)(_.A, {
                iconNode: (0, s.jsx)(lr.y, { size: "md", color: "currentColor", className: lm.K }),
                timestamp: t.timestamp,
                compact: n,
                children: y.intl.string(y.t.OCs36J),
            });
        },
        [D.lAJ.GUILD_INVITE_REMINDER]: void 0,
        [D.lAJ.AUTO_MODERATION_ACTION]: function (e) {
            let { message: t, compact: n, channel: i } = e;
            return (0, E.ER)(t) ? (0, s.jsx)(iu, { message: t, compact: n, channel: i }) : null;
        },
        [D.lAJ.GUILD_INCIDENT_ALERT_MODE_ENABLED]: st,
        [D.lAJ.GUILD_INCIDENT_ALERT_MODE_DISABLED]: st,
        [D.lAJ.GUILD_INCIDENT_REPORT_RAID]: function (e) {
            let { message: t, compact: n, channel: i } = e,
                l = (0, C.P)({ user: t.author, channelId: i.id, guildId: i.guild_id, messageId: t.id });
            return (0, s.jsx)(i$, { message: t, compact: n, channel: i, usernameHook: l });
        },
        [D.lAJ.GUILD_INCIDENT_REPORT_FALSE_ALARM]: function (e) {
            let { message: t, compact: n, channel: i } = e,
                l = (0, C.P)({ user: t.author, channelId: i.id, guildId: i.guild_id, messageId: t.id });
            return (0, s.jsx)(iQ, { message: t, compact: n, channel: i, usernameHook: l });
        },
        [D.lAJ.ROLE_SUBSCRIPTION_PURCHASE]: function (e) {
            let { channel: t, message: i, compact: l } = e,
                r = (0, L.Ay)(i),
                o = (function (e) {
                    let { author: t, channel: n, message: i } = e,
                        l = n.guild_id,
                        s = (0, C.P)({ user: i.author, channelId: n.id, guildId: l, messageId: i.id })(t),
                        { analyticsLocations: r } = (0, B.Ay)(H.A.GUILD_ROLE_SUBSCRIPTION_PURCHASE_SYSTEM_MESSAGE),
                        o = i.roleSubscriptionData,
                        d = a.useCallback(() => {
                            ((0, v.pX)(D.BVt.CHANNEL(l, ea.VV.ROLE_SUBSCRIPTIONS), { sourceLocationStack: r }),
                                o?.role_subscription_listing_id != null &&
                                    (0, F.xH)(l, n.id, i.id, o.role_subscription_listing_id));
                        }, [l, n, i, o, r]);
                    return null == o
                        ? null
                        : (0, F.gw)({
                              username: t.nick,
                              usernameOnClickHandler: s,
                              roleSubscriptionOnClickHandler: d,
                              guildId: l,
                              roleSubscriptionData: i.roleSubscriptionData,
                          });
                })({ channel: t, message: i, author: r }),
                d =
                    i.roleSubscriptionData?.total_months_subscribed != null &&
                    i.roleSubscriptionData?.total_months_subscribed <= 1;
            return null == o
                ? null
                : (0, s.jsxs)(s.Fragment, {
                      children: [
                          (0, s.jsx)(_.A, { icon: n(617184), timestamp: i.timestamp, compact: l, children: o }),
                          d && (0, s.jsx)(ed, { guildId: t.guild_id, user: i.author, username: r.nick }),
                          (0, s.jsx)(ei, { channel: t, message: i }),
                      ],
                  });
        },
        [D.lAJ.PURCHASE_NOTIFICATION]: function (e) {
            let { message: t, channel: n, compact: i } = e;
            return t.purchaseNotification?.type === x.hE.GUILD_PRODUCT
                ? (0, s.jsx)(w, { message: t, channel: n, compact: i })
                : null;
        },
        [D.lAJ.INTERACTION_PREMIUM_UPSELL]: void 0,
        [D.lAJ.STAGE_START]: function (e) {
            let { message: t, channel: n, compact: i } = e,
                l = (0, C.P)({ user: t.author, channelId: n.id, guildId: n.guild_id, messageId: t.id }),
                a = (0, d.bG)([ec.Ay], () => ec.Ay.getActiveEventByChannel(n.id), [n.id]);
            return (0, s.jsxs)(s.Fragment, {
                children: [
                    (0, s.jsx)(ls, { message: t, compact: i, usernameHook: l }),
                    null != a && a.name === t.content ? (0, s.jsx)(eu.A, { code: `${n.guild_id}-${a.id}` }) : null,
                ],
            });
        },
        [D.lAJ.STAGE_END]: function (e) {
            let { message: t, channel: n, compact: i } = e,
                l = (0, C.P)({ user: t.author, channelId: n.id, guildId: n.guild_id, messageId: t.id });
            return (0, s.jsx)(lt, { message: t, compact: i, usernameHook: l });
        },
        [D.lAJ.STAGE_SPEAKER]: function (e) {
            let { message: t, channel: n, compact: i } = e,
                l = (0, C.P)({ user: t.author, channelId: n.id, guildId: n.guild_id, messageId: t.id });
            return (0, s.jsx)(ll, { message: t, compact: i, usernameHook: l });
        },
        [D.lAJ.STAGE_RAISE_HAND]: function (e) {
            let { message: t, channel: n, compact: i } = e,
                l = (0, C.P)({ user: t.author, channelId: n.id, guildId: n.guild_id, messageId: t.id }),
                a = (0, d.bG)([Y.A], () => Y.A.can(D.xBc.MUTE_MEMBERS, n)),
                r = (0, d.bG)([tL.A], () => tL.A.getParticipant(n.id, t.author.id)),
                o =
                    new Date(X.default.extractTimestamp(t.id)).toISOString() ===
                    new Date(r?.voiceState?.requestToSpeakTimestamp ?? 0).toISOString(),
                c = a && r?.rtsState === tO.zF.REQUESTED_TO_SPEAK && o;
            return (0, s.jsxs)(s.Fragment, {
                children: [
                    (0, s.jsx)(li, { message: t, compact: i, usernameHook: l }),
                    c
                        ? (0, s.jsx)(u.$, {
                              variant: "secondary",
                              onClick: function () {
                                  ((0, tM.lL)(n, t.author.id, !1), g.A.deleteMessage(n.id, t.id, !0));
                              },
                              text: y.intl.string(y.t.f0T7hI),
                              icon: m.L,
                          })
                        : null,
                ],
            });
        },
        [D.lAJ.STAGE_TOPIC]: function (e) {
            let { message: t, channel: n, compact: i } = e,
                l = (0, C.P)({ user: t.author, channelId: n.id, guildId: n.guild_id, messageId: t.id });
            return (0, s.jsx)(la, { message: t, compact: i, usernameHook: l });
        },
        [D.lAJ.GUILD_APPLICATION_PREMIUM_SUBSCRIPTION]: function (e) {
            let { message: t, channel: n, compact: i } = e,
                l = (0, L.Ay)(t),
                a = t.application,
                r = (0, C.P)({ user: t.author, channelId: n.id, guildId: n.guild_id, messageId: t.id });
            return (0, s.jsx)(_.A, {
                iconNode: (0, s.jsx)(tm.q, { size: "md", color: "currentColor", className: th.C }),
                timestamp: t.timestamp,
                compact: i,
                children: (function (e) {
                    let { application: t, username: n, usernameHook: i = D.tEg } = e;
                    return null != t
                        ? y.intl.format(y.t.dXdgno, { username: n, applicationName: t.name, usernameHook: i })
                        : y.intl.format(y.t.O829Uu, { username: n, usernameHook: i });
                })({ application: a, username: l.nick, usernameHook: r(l) }),
            });
        },
        [D.lAJ.PRIVATE_CHANNEL_INTEGRATION_ADDED]: function (e) {
            let { message: t, channel: i, compact: l } = e,
                a = (0, L.Ay)(t),
                r = t.application,
                o = (0, C.P)({ user: t.author, channelId: i.id, guildId: i.guild_id, messageId: t.id }),
                d = tf(i, t);
            return (0, s.jsx)(_.A, {
                icon: n(617184),
                timestamp: t.timestamp,
                compact: l,
                children: (0, tx.eu)({
                    application: r,
                    username: a.nick,
                    usernameHook: o(a),
                    applicationNameHook: null != r ? d(r) : D.tEg,
                }),
            });
        },
        [D.lAJ.PRIVATE_CHANNEL_INTEGRATION_REMOVED]: function (e) {
            let { message: t, channel: i, compact: l } = e,
                a = (0, L.Ay)(t),
                r = t.application,
                o = (0, C.P)({ user: t.author, channelId: i.id, guildId: i.guild_id, messageId: t.id }),
                d = tf(i, t);
            return (0, s.jsx)(_.A, {
                icon: n(884797),
                timestamp: t.timestamp,
                compact: l,
                children: (0, tx.A0)({
                    application: r,
                    username: a.nick,
                    usernameHook: o(a),
                    applicationNameHook: null != r ? d(r) : D.tEg,
                }),
            });
        },
        [D.lAJ.PREMIUM_REFERRAL]: function (e) {
            let { message: t, compact: n } = e;
            return (0, s.jsx)(tu, { userTrialOfferId: t.referralTrialOfferId, canRenderReferralEmbed: !0, compact: n });
        },
        [D.lAJ.GUILD_DEADCHAT_REVIVE_PROMPT]: void 0,
        [D.lAJ.CUSTOM_GIFT]: void 0,
        [D.lAJ.GUILD_GAMING_STATS_PROMPT]: void 0,
        [D.lAJ.VOICE_HANGOUT_INVITE]: void 0,
        [D.lAJ.POLL_RESULT]: function (e) {
            let { message: t, channel: n, compact: i, disableInteraction: l = !1 } = e,
                r = t.embeds[0],
                o = a.useMemo(
                    () =>
                        (function (e) {
                            if (e?.fields == null) return null;
                            let t = {},
                                n = {};
                            for (let i of e.fields)
                                switch (i.rawName) {
                                    case "poll_question_text":
                                        t.questionText = i.rawValue;
                                        break;
                                    case "victor_answer_id":
                                        t.victorAnswerId = i.rawValue;
                                        break;
                                    case "victor_answer_text":
                                        t.victorAnswerText = i.rawValue;
                                        break;
                                    case "victor_answer_votes":
                                        t.victorAnswerVotes = parseInt(i.rawValue, 10);
                                        break;
                                    case "total_votes":
                                        t.totalVotes = parseInt(i.rawValue, 10);
                                        break;
                                    case "victor_answer_emoji_id":
                                        n.id = i.rawValue;
                                        break;
                                    case "victor_answer_emoji_name":
                                        n.name = i.rawValue;
                                        break;
                                    case "victor_answer_emoji_animated":
                                        n.animated = "true" === i.rawValue;
                                }
                            return (null != n.name && ((n.animated = n.animated ?? !1), (t.victorEmoji = n)), t);
                        })(r),
                    [r],
                ),
                d = (0, ej.EJ)(o?.questionText ?? "", eb.TU),
                c = (0, L.Ay)(t),
                u = (0, C.P)({
                    user: t.author,
                    channelId: n.id,
                    guildId: n.guild_id,
                    messageId: t.id,
                    displayInline: !0,
                }),
                m = t.messageReference,
                h = a.useCallback(() => {
                    null != m &&
                        g.A.jumpToMessage({
                            channelId: m.channel_id,
                            messageId: m.message_id,
                            flash: !0,
                            returnMessageId: t.id,
                        });
                }, [t.id, m]);
            return null == o
                ? null
                : (0, s.jsxs)(s.Fragment, {
                      children: [
                          (0, s.jsx)(_.A, {
                              iconNode: (0, s.jsx)(eT.Y, { size: "xs" }),
                              timestamp: t.timestamp,
                              compact: i,
                              children: y.intl.format(y.t.VJcK41, {
                                  username: c.nick,
                                  usernameHook: u(c),
                                  title: d,
                                  titleOnClick: h,
                              }),
                          }),
                          (0, s.jsx)(eO, { className: eR.E6, data: o, onClickPollLink: l ? void 0 : h }),
                      ],
                  });
        },
        [D.lAJ.CHANGELOG]: void 0,
        [D.lAJ.NITRO_NOTIFICATION]: function (e) {
            let { message: t, channel: n } = e;
            return (0, s.jsx)(no, { message: t, channel: n });
        },
        [D.lAJ.CHANNEL_LINKED_TO_LOBBY]: function (e) {
            let { message: t, channel: n, compact: i } = e;
            return (0, s.jsx)(iN, { message: t, channel: n, compact: i });
        },
        [D.lAJ.GIFTING_PROMPT]: function (e) {
            let { message: t, channel: n } = e,
                i = t.giftingPrompt,
                l = (0, d.bG)([T.default], () => T.default.getUser(i?.recipientUserId));
            return null == i || null == l
                ? null
                : (0, s.jsx)(ni, { giftIntentType: i.giftIntentType, recipientUser: l, channel: n });
        },
        [D.lAJ.IN_GAME_MESSAGE_NUX]: function (e) {
            let { message: t, channel: n, compact: i } = e;
            return (0, s.jsx)(i7, { message: t, channel: n, author: t.author, compact: i });
        },
        [D.lAJ.GUILD_JOIN_REQUEST_ACCEPT_NOTIFICATION]: function (e) {
            let { message: t, channel: i, compact: l } = e,
                { guild: a, joinRequest: r, usernameHook: o, guildNameClick: d } = b(t, i),
                c = r?.user?.username,
                u = a?.name;
            return (0, s.jsx)(_.A, {
                icon: n(617184),
                timestamp: t.timestamp,
                compact: l,
                children:
                    null != c && null != u
                        ? y.intl.format(y.t["21R6Ch"], {
                              username: c,
                              usernameHook: o(),
                              guildName: u,
                              guildNameClick: d,
                          })
                        : y.intl.string(y.t["2VLV0d"]),
            });
        },
        [D.lAJ.GUILD_JOIN_REQUEST_REJECT_NOTIFICATION]: function (e) {
            let { message: t, channel: i, compact: l } = e,
                { guild: a, joinRequest: r, usernameHook: o, guildNameClick: d } = b(t, i),
                c = r?.user?.username,
                u = a?.name;
            return (0, s.jsx)(_.A, {
                icon: n(884797),
                timestamp: t.timestamp,
                compact: l,
                children:
                    null != c && null != u
                        ? y.intl.format(y.t["Bz/QC2"], {
                              username: c,
                              usernameHook: o(),
                              guildName: u,
                              guildNameClick: d,
                          })
                        : y.intl.string(y.t.FVF6qU),
            });
        },
        [D.lAJ.GUILD_JOIN_REQUEST_WITHDRAWN_NOTIFICATION]: function (e) {
            let { message: t, channel: i, compact: l } = e,
                { guild: a, joinRequest: r, usernameHook: o, guildNameClick: d } = b(t, i),
                c = r?.user?.username,
                u = a?.name;
            return (0, s.jsx)(_.A, {
                icon: n(884797),
                timestamp: t.timestamp,
                compact: l,
                children:
                    null != c && null != u
                        ? y.intl.format(y.t.Kpkesg, { username: c, usernameHook: o(), guildName: u, guildNameClick: d })
                        : y.intl.string(y.t.BMlbE7),
            });
        },
        [D.lAJ.HD_STREAMING_UPGRADED]: void 0,
        [D.lAJ.EMOJI_ADDED]: void 0,
        [D.lAJ.CHAT_WALLPAPER_SET]: void 0,
        [D.lAJ.CHAT_WALLPAPER_REMOVED]: void 0,
        [D.lAJ.REPORT_TO_MOD_BAN_USER]: tk,
        [D.lAJ.REPORT_TO_MOD_KICK_USER]: tk,
        [D.lAJ.REPORT_TO_MOD_TIMEOUT_USER]: tk,
        [D.lAJ.REPORT_TO_MOD_DELETED_MESSAGE]: tk,
        [D.lAJ.REPORT_TO_MOD_CLOSED_REPORT]: tk,
        [D.lAJ.PREMIUM_GROUP_INVITE]: function (e) {
            let { message: t, channel: n, compact: i } = e;
            return (0, s.jsx)(e1, { message: t, channel: n, compact: i });
        },
        [D.lAJ.VOICE_SESSION]: function (e) {
            let { message: t, channel: n, compact: i } = e;
            return (0, s.jsx)(l9, { message: t, channel: n, compact: i });
        },
        [D.lAJ.GUILD_BOOST_UPSELL]: function (e) {
            let { message: t, channel: n } = e;
            return null == t.boostingPrompt ? null : (0, s.jsx)(iK, { boostingPrompt: t.boostingPrompt, channel: n });
        },
        [D.lAJ.FRIEND_REQUEST_ACCEPTED]: function (e) {
            let { message: t, channel: n, compact: i } = e;
            return (0, s.jsx)(ib, { message: t, channel: n, compact: i });
        },
        [D.lAJ.MEDIA_MENTION_MESSAGE]: void 0,
        [D.lAJ.GUILD_SPACE_MESSAGE]: function (e) {
            let { message: t } = e,
                n = t.guildSpaceData?.whiteboard_busy;
            return null != n
                ? (0, s.jsx)(e_, { ...e, data: n })
                : null != t.guildSpaceData?.leaderboard
                  ? (0, s.jsx)(eE, { ...e })
                  : null;
        },
    }),
    si = a.memo(function (e) {
        let { message: t, channel: n, compact: i, disableInteraction: l } = e,
            { type: a } = t,
            r = sn[a];
        if (null == r) {
            var o;
            return (
                (o = Error(`unknown message type ${t.type}`)),
                eV.A.captureException(o),
                new f.A("SystemMessage").error("", o),
                null
            );
        }
        return (0, s.jsx)(nl.Ay, {
            message: t,
            content: (0, tY.Ay)(t).content,
            compact: i ?? !1,
            children: (0, s.jsx)(r, { message: t, channel: n, compact: i, disableInteraction: l }),
        });
    });
function sl(e) {
    let { message: t, channel: n, compact: i, disableInteraction: l } = e;
    return (0, o.A)(t) ? (0, s.jsx)(si, { message: t, channel: n, compact: i, disableInteraction: l }) : null;
}
