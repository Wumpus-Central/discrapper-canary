n.d(t, {
    Z: function () {
        return u;
    }
}),
    n(47120);
var i = n(200651),
    r = n(192379),
    l = n(120356),
    a = n.n(l),
    s = n(481060),
    o = n(497505),
    c = n(415104),
    d = n(86675);
function u(e) {
    var t;
    let { quests: n, isFetching: l } = e,
        u = null;
    if (window.location.hash.length > 0) {
        let e = window.location.hash.slice(1);
        for (let t of n)
            if (t.id === e) {
                u = e;
                break;
            }
    }
    r.useEffect(() => {
        for (let e of n)
            if (e.id === u) {
                let e = document.getElementById('quest-tile-'.concat(u));
                null == e ||
                    e.scrollIntoView({
                        behavior: 'smooth',
                        block: 'center'
                    });
                break;
            }
    }, [n, u]);
    let h = null != u,
        [m, p] = r.useState(window.innerWidth);
    r.useEffect(() => {
        let e = () => {
            p(window.innerWidth);
        };
        return (
            window.addEventListener('resize', e),
            () => {
                window.removeEventListener('resize', e);
            }
        );
    }, []);
    let g = (t = m) >= 1610 ? 3 : t >= 1340 ? 2 : 1;
    return l && 0 === n.length
        ? (0, i.jsx)(s.Spinner, { className: d.spinner })
        : (0, i.jsx)(
              'div',
              {
                  className: d.container,
                  children: n.map((e, t) => {
                      let n = Math.floor(t / g);
                      return (0, i.jsx)(
                          c.Z,
                          {
                              quest: e,
                              questContent: o.jn.QUEST_HOME_DESKTOP,
                              contentPosition: t,
                              rowIndex: n,
                              className: a()(d.questTile, {
                                  [d.selected]: h && e.id === u,
                                  [d.unselected]: h && e.id !== u
                              })
                          },
                          e.id
                      );
                  })
              },
              null != u ? u : ''
          );
}
