n.d(t, { A: () => m });
var i = n(627968);
n(64700);
var l = n(310784),
    a = n.n(l),
    s = n(503698),
    r = n.n(s),
    o = n(311907),
    c = n(534890),
    d = n(922529),
    u = n(736339),
    h = n(507610);
function m(e) {
    let { item: t, channel: n, index: l } = e,
        s = (0, o.bG)([u.A], () => u.A.getSelectedConversation(n.id)),
        m = (0, o.bG)([u.A], () => u.A.getSelectedConversationColor(n.id));
    if (null == s) return null;
    let A = null != t.content,
        g = null != m ? a()(m).alpha(1).css() : void 0;
    return (0, i.jsx)("div", {
        style: null != g ? { "--conversation-color": g } : void 0,
        children: (0, i.jsx)(
            d.A,
            {
                className: r()(h.yF, A ? h.AC : h.xR),
                contentClassName: A ? h.Ij : h.Xe,
                children: A
                    ? (0, i.jsxs)(i.Fragment, {
                          children: [
                              (0, i.jsx)(c.o, { size: "xs", color: "currentColor", className: h.Kk }),
                              t.content,
                          ],
                      })
                    : (0, i.jsx)(c.o, { size: "xs", color: "currentColor", className: h.Kk }),
            },
            `conv-divider-${t.contentKey ?? l}`,
        ),
    });
}
