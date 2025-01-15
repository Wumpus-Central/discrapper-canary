n(47120);
var o = n(200651),
    r = n(192379),
    s = n(481060);
t.Z = function (e) {
    let { assetKey: t, initialValue: n, onMessageChange: a, title: i } = e,
        [l, c] = r.useState('');
    return (
        r.useEffect(() => {
            c(null != n ? n : '');
        }, [n]),
        (0, o.jsxs)(s.FormItem, {
            children: [
                (0, o.jsx)(s.FormTitle, {
                    tag: s.FormTitleTags.H5,
                    children: i
                }),
                (0, o.jsx)(s.FormText, {
                    children: (0, o.jsx)(s.TextInput, {
                        value: l,
                        onChange: function (e) {
                            c(e), a(t, e);
                        }
                    })
                })
            ]
        })
    );
};
