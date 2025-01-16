r.d(n, {
    Z: function () {
        return f;
    }
});
var i = r(200651);
r(192379);
var a = r(442837),
    s = r(481060),
    o = r(898531),
    l = r(314897),
    u = r(131951),
    c = r(388032),
    d = r(756890);
function f(e) {
    let n = (0, s.useModalContext)(),
        f = (0, a.e7)([u.Z], () => u.Z.isVideoEnabled()),
        _ = (0, a.e7)([l.default], () => l.default.getId() === e),
        h = (0, o.Z)();
    function p() {
        (0, s.openModalLazy)(
            async () => {
                let { default: e } = await Promise.all([r.e('8821'), r.e('39607')]).then(r.bind(r, 601572));
                return (n) =>
                    (0, i.jsx)(e, {
                        ...n,
                        videoEnabled: f
                    });
            },
            {
                modalKey: 'camera-preview',
                contextKey: n
            }
        );
    }
    return (!f || h) && _
        ? (0, i.jsx)(s.MenuItem, {
              id: 'change-video-background',
              label: (0, i.jsx)('div', {
                  className: d.item,
                  children: f ? c.intl.string(c.t.mZKxHR) : c.intl.string(c.t.vkV939)
              }),
              action: p
          })
        : null;
}
