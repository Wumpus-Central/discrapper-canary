n.d(t, { U: () => _ });
var r = n(54381),
    i = n(473749),
    a = n(399606),
    o = n(481060),
    s = n(592125),
    l = n(922482),
    c = n(750154),
    u = n(427679),
    d = n(388032);
function f(e, t, n) {
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
function p(e) {
    var t, n;
    let { activity: f } = e,
        { channelId: p } = null != (t = (0, c.rq)(f)) ? t : {},
        _ = (0, a.e7)([u.Z], () => u.Z.getStageInstanceByChannel(p), [p]),
        m = i.useRef(null),
        h = i.useCallback(() => {
            let e = s.Z.getChannel(p);
            null != e && l.Cq(e);
        }, [p]),
        g = null != (n = null == _ ? void 0 : _.topic) ? n : f.name,
        E = d.intl.formatToPlainString(d.t["T+DNAA"], { channel: g });
    return (0, r.jsx)("div", {
        ref: m,
        children: (0, r.jsx)(o.P3F, {
            onClick: h,
            focusProps: { ringTarget: m },
            children: (0, r.jsx)(o.Heading, {
                variant: "heading-sm/semibold",
                children: E,
            }),
        }),
    });
}
class _ {
    shouldShow(e) {
        return (0, c.JE)(e);
    }
    createHeader(e) {
        return {
            subtitle: d.intl.string(d.t["+AJFJy"]),
            icon: null,
        };
    }
    constructor() {
        f(this, "body", p);
    }
}
