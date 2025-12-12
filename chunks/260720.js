n.d(t, { x: () => f });
var r = n(313789),
    i = n(518596),
    o = n(594174),
    a = n(51144),
    s = n(282793),
    l = n(981631),
    c = n(941651),
    u = n(388032);
let d = (e, t) => {
        var n;
        if (null == t) return null;
        let r = null == (n = t.recipients) ? void 0 : n.find((t) => t !== e.id),
            i = o.default.getUser(r);
        return null == i ? null : (0, a.XM)(i);
    },
    f = (e) => {
        let t,
            n,
            { sender: o, channel: f, isSender: p, inviteState: _ } = e,
            m = (0, s.sO)();
        if (p) {
            let e = d(o, f);
            if (null == e) return null;
            let a = u.intl.format(c.default.MkcFjx, {
                receiverName: e,
                premiumGroupProductName: m,
            });
            switch (_) {
                case s.bZ.ACCEPTED:
                    (t = u.intl.formatToPlainString(c.default["5uwv8J"], { premiumGroupProductName: m })),
                        (n = u.intl.formatToPlainString(c.default["W7e/z1"], { receiverName: e }));
                    break;
                case s.bZ.REMOVED:
                case s.bZ.NOT_FOUND:
                case s.bZ.ERROR:
                    (t = u.intl.formatToPlainString(c.default.YLvraS, { premiumGroupProductName: m })),
                        (n = u.intl.format(c.default.BHxlIR, {
                            premiumGroupProductName: m,
                            onClick: () => {
                                (0, i.openUserSettings)(r.n.SUBSCRIPTIONS_PANEL, { section: l.oAB.SUBSCRIPTIONS });
                            },
                        }));
                    break;
                case s.bZ.PENDING:
                default:
                    (t = u.intl.formatToPlainString(c.default["5uwv8J"], { premiumGroupProductName: m })),
                        (n = u.intl.formatToPlainString(c.default["AmE0B/"], { receiverName: e }));
            }
            return {
                message: a,
                header: t,
                body: n,
            };
        } else {
            let e = (0, a.XM)(o),
                r = u.intl.format(c.default["51Kv/4"], {
                    senderName: e,
                    premiumGroupProductName: m,
                    helpCenterLink: s.j3,
                });
            switch (_) {
                case s.bZ.ACCEPTED:
                    (t = u.intl.string(c.default.ssge1y)),
                        (n = u.intl.formatToPlainString(c.default.fTAcw3, { senderName: e }));
                    break;
                case s.bZ.REMOVED:
                case s.bZ.NOT_FOUND:
                case s.bZ.ERROR:
                    (t = u.intl.formatToPlainString(c.default["AmLUw+"], { premiumGroupProductName: m })),
                        (n = u.intl.formatToPlainString(c.default["7XAuyg"], { premiumGroupProductName: m }));
                    break;
                case s.bZ.PENDING:
                default:
                    (t = u.intl.string(c.default.ssge1y)),
                        (n = u.intl.formatToPlainString(c.default.MkcdX8, {
                            senderName: e,
                            premiumGroupProductName: m,
                        }));
            }
            return {
                message: r,
                header: t,
                body: n,
            };
        }
    };
