n.d(t, { W: () => s });
var i = n(255367),
    a = n(657707),
    o = n(206403);
function s(e) {
    let { node: t } = e;
    return (0, i.jsx)(o.x, {
        title: 'useTitle' in t.data && 'function' == typeof t.data.useTitle ? '[PLACEHOLDER] '.concat(t.data.useTitle(!1)) : '[PLACEHOLDER]',
        description: 'useSubtitle' in t.data && 'function' == typeof t.data.useSubtitle ? t.data.useSubtitle() : '',
        secondaryTrailingElement: (0, i.jsx)(a.tEQ, {})
    });
}
