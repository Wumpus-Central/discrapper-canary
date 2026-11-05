n.d(t, { Fm: () => p, Ij: () => I, IS: () => m });
var i = n(477900),
    r = n(582128),
    a = n(164636),
    s = n(939249),
    l = n(534514),
    o = n(734057),
    d = n(129095),
    c = n(82149),
    u = n(446600),
    _ = n(792996);
function E(e) {
    let { activity: t } = e,
        { channelId: n } = (0, c.UW)(t) ?? {},
        E = (0, a.bG)([u.A], () => u.A.getStageInstanceByChannel(n), [n]),
        A = r.useRef(null),
        f = r.useCallback(() => {
            let e = o.A.getChannel(n);
            null != e && d.av(e);
        }, [n]),
        h = E?.topic ?? t.name,
        I = _.intl.formatToPlainString(_.t["T+DNAA"], { channel: h });
    return (0, i.jsx)("div", {
        ref: A,
        children: (0, i.jsx)(s.D, {
            onClick: f,
            focusProps: { ringTarget: A },
            children: (0, i.jsx)(l.D, { variant: "heading-xs/semibold", children: I }),
        }),
    });
}
var A = n(516607),
    f = n(356772);
let h = {
    [A.SS]: new (class {
        shouldShow(e) {
            return (0, c.IS)(e);
        }
        createHeader(e) {
            return { subtitle: _.intl.string(_.t["+AJFJy"]), icon: null };
        }
        body = E;
    })(),
};
function I(e) {
    let t = e.application_id;
    if (null == t) return;
    let n = h[t];
    if (null != n && n.shouldShow?.(e) !== !1) return n.createHeader(e);
}
function p(e) {
    let t = e.application_id;
    if (null == t) return;
    let n = h[t];
    if (n?.body != null && n.shouldShow?.(e) !== !1) {
        let r = n.body;
        return (0, i.jsx)("section", { className: f.uW, children: (0, i.jsx)(r, { activity: e }) }, `delegate-${t}`);
    }
}
function m(e) {
    let t = e.application_id;
    if (null == t) return !0;
    let n = h[t];
    return null == n || n.shouldShow?.(e) !== !1;
}
