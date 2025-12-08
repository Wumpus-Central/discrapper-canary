n.d(t, { x: () => c });
var r = n(594174),
    i = n(51144),
    a = n(282793),
    o = n(441677),
    s = n(388032);
let l = (e, t) => {
        var n;
        if (null == t) return null;
        let a = null == (n = t.recipients) ? void 0 : n.find((t) => t !== e.id),
            o = r.default.getUser(a);
        return null == o ? null : (0, i.XM)(o);
    },
    c = (e) => {
        let t,
            n,
            { sender: r, channel: c, isSender: u, inviteState: d, isMobile: f = !1 } = e,
            p = (0, a.sO)();
        if (u) {
            let e = l(r, c);
            if (null == e) return null;
            let i = s.intl.format(o.default.MkcFjx, {
                receiverName: e,
                premiumGroupProductName: p,
            });
            switch (d) {
                case a.bZ.ACCEPTED:
                    (t = s.intl.formatToPlainString(o.default["5uwv8J"], { premiumGroupProductName: p })),
                        (n = s.intl.formatToPlainString(o.default["W7e/z1"], { receiverName: e }));
                    break;
                case a.bZ.REMOVED:
                case a.bZ.NOT_FOUND:
                case a.bZ.ERROR:
                    (t = s.intl.formatToPlainString(o.default.YLvraS, { premiumGroupProductName: p })),
                        (n = s.intl.format(o.default.BHxlIR, {
                            premiumGroupProductName: p,
                            onClick: () => {},
                        }));
                    break;
                case a.bZ.PENDING:
                default:
                    (t = s.intl.formatToPlainString(o.default["5uwv8J"], { premiumGroupProductName: p })),
                        (n = s.intl.formatToPlainString(o.default["AmE0B/"], { receiverName: e }));
            }
            return {
                message: i,
                header: t,
                body: n,
            };
        } else {
            let e = (0, i.XM)(r),
                l = s.intl.format(o.default["51Kv/4"], {
                    senderName: e,
                    premiumGroupProductName: p,
                    helpCenterLink: a.j3,
                });
            switch (d) {
                case a.bZ.ACCEPTED:
                    (t = s.intl.string(o.default.ssge1y)),
                        (n = s.intl.formatToPlainString(o.default.fTAcw3, { senderName: e }));
                    break;
                case a.bZ.REMOVED:
                case a.bZ.NOT_FOUND:
                case a.bZ.ERROR:
                    (t = s.intl.formatToPlainString(o.default["AmLUw+"], { premiumGroupProductName: p })),
                        (n = s.intl.formatToPlainString(o.default["7XAuyg"], { premiumGroupProductName: p }));
                    break;
                case a.bZ.PENDING:
                default:
                    (t = s.intl.string(o.default.ssge1y)),
                        (n = f
                            ? s.intl.formatToPlainString(o.default.tej76V, {
                                  senderName: e,
                                  premiumGroupProductName: p,
                              })
                            : s.intl.formatToPlainString(o.default.MkcdX8, {
                                  senderName: e,
                                  premiumGroupProductName: p,
                              }));
            }
            return {
                message: l,
                header: t,
                body: n,
            };
        }
    };
