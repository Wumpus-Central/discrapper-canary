n.d(t, {
    Z: function () {
        return l;
    }
});
var i = n(200651);
n(192379);
var a = n(481060),
    r = n(802766);
function l(e) {
    let { activeSection: t, setSection: n, sections: l } = e;
    return (0, i.jsx)(a.TabBar, {
        selectedItem: t,
        type: 'top',
        onItemSelect: n,
        className: r.tabBar,
        children: l.map((e) => {
            let { name: t, text: n, Icon: l } = e;
            return (0, i.jsxs)(
                a.TabBar.Item,
                {
                    id: t,
                    className: r.tabBarItem,
                    'aria-label': n,
                    children: [
                        (0, i.jsx)(l, {
                            className: r.icon,
                            color: 'currentColor'
                        }),
                        n
                    ]
                },
                t
            );
        })
    });
}
