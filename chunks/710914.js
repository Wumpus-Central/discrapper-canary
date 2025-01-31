n.d(t, { Z: () => u }), n(47120);
var i = n(200651),
    l = n(192379),
    r = n(120356),
    a = n.n(r),
    s = n(481060),
    o = n(497505),
    c = n(415104),
    d = n(86675);
function u(e) {
    let { quests: t, isFetching: n } = e,
        r = null;
    if (window.location.hash.length > 0) {
        let e = window.location.hash.slice(1);
        for (let n of t)
            if (n.id === e) {
                r = e;
                break;
            }
    }
    l.useEffect(() => {
        for (let e of t)
            if (e.id === r) {
                let e = document.getElementById('quest-tile-'.concat(r));
                null == e ||
                    e.scrollIntoView({
                        behavior: 'smooth',
                        block: 'center'
                    });
                break;
            }
    }, [t, r]);
    let u = null != r,
        [h, m] = l.useState(window.innerWidth);
    l.useEffect(() => {
        let e = () => {
            m(window.innerWidth);
        };
        return (
            window.addEventListener('resize', e),
            () => {
                window.removeEventListener('resize', e);
            }
        );
    }, []);
    let p = h >= 1610 ? 3 : h >= 1340 ? 2 : 1;
    return n && 0 === t.length
        ? (0, i.jsx)(s.$jN, { className: d.spinner })
        : (0, i.jsx)(
              'div',
              {
                  className: d.container,
                  children: t.map((e, t) => {
                      let n = Math.floor(t / p);
                      return (0, i.jsx)(
                          c.Z,
                          {
                              quest: e,
                              questContent: o.jn.QUEST_HOME_DESKTOP,
                              contentPosition: t,
                              rowIndex: n,
                              className: a()(d.questTile, {
                                  [d.selected]: u && e.id === r,
                                  [d.unselected]: u && e.id !== r
                              })
                          },
                          e.id
                      );
                  })
              },
              null != r ? r : ''
          );
}
