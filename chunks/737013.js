r.d(n, {
    Z: function () {
        return f;
    }
});
var i = r(200651);
r(192379);
var a = r(442837),
    o = r(481060),
    s = r(898531),
    l = r(314897),
    u = r(131951),
    c = r(388032),
    d = r(756890);
function f(e) {
    let n = (0, o.useModalContext)(),
        f = (0, a.e7)([u.Z], () => u.Z.isVideoEnabled()),
        p = (0, a.e7)([l.default], () => l.default.getId() === e),
        h = (0, s.Z)();
    function _() {
        (0, o.openModalLazy)(
            async () => {
                let { default: e } = await Promise.all([r.e('50506'), r.e('96211'), r.e('23217'), r.e('84605'), r.e('8016'), r.e('51269'), r.e('22878'), r.e('90508'), r.e('13351'), r.e('66711'), r.e('17938'), r.e('21628'), r.e('6380'), r.e('46097'), r.e('76540'), r.e('8739'), r.e('58059'), r.e('86282'), r.e('18543'), r.e('18895'), r.e('68445'), r.e('19652'), r.e('99393'), r.e('99008'), r.e('37229'), r.e('22646'), r.e('95393'), r.e('3940'), r.e('25183'), r.e('80284'), r.e('81463'), r.e('65889'), r.e('31135'), r.e('48923'), r.e('30419'), r.e('69174'), r.e('18824'), r.e('30203'), r.e('82544'), r.e('88455'), r.e('80606')]).then(r.bind(r, 601572));
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
    return (!f || h) && p
        ? (0, i.jsx)(o.MenuItem, {
              id: 'change-video-background',
              label: (0, i.jsx)('div', {
                  className: d.item,
                  children: f ? c.intl.string(c.t.mZKxHR) : c.intl.string(c.t.vkV939)
              }),
              action: _
          })
        : null;
}
