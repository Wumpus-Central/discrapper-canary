n.d(t, { Z: () => h }), n(47120), n(733860), n(653041);
var i = n(200651),
    l = n(192379),
    r = n(120356),
    a = n.n(r),
    s = n(481060),
    o = n(497505),
    d = n(415104),
    c = n(642145),
    u = n(176418);
function h(e) {
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
    let h = null != r,
        [m, p] = l.useState(window.innerWidth);
    l.useEffect(() => {
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
    let g = m >= 1610 ? 3 : m >= 1340 ? 2 : 1,
        _ = l.useMemo(() => {
            let e = [];
            for (let i of t) {
                var n;
                i.id === c.V && (null === (n = i.userStatus) || void 0 === n ? void 0 : n.claimedAt) == null ? e.unshift(i) : e.push(i);
            }
            return e;
        }, [t]);
    return n && 0 === t.length
        ? (0, i.jsx)(s.$jN, { className: u.spinner })
        : (0, i.jsx)(
              'div',
              {
                  className: u.container,
                  children: _.map((e, t) => {
                      let n = Math.floor(t / g);
                      return (0, i.jsx)(
                          d.Z,
                          {
                              quest: e,
                              questContent: o.jn.QUEST_HOME_DESKTOP,
                              contentPosition: t,
                              rowIndex: n,
                              className: a()(u.questTile, {
                                  [u.selected]: h && e.id === r,
                                  [u.unselected]: h && e.id !== r
                              })
                          },
                          e.id
                      );
                  })
              },
              null != r ? r : ''
          );
}
