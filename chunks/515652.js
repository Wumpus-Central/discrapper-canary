r.d(n, {
    s: function () {
        return l;
    }
});
var i,
    a = r(778882),
    o = r(401010);
function s(e, n, r) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = r),
        e
    );
}
var l =
    (s((i = {}), a.FILE, {
        exposeProperties: {
            files: function (e) {
                return Array.prototype.slice.call(e.files);
            },
            items: function (e) {
                return e.items;
            }
        },
        matchesTypes: ['Files']
    }),
    s(i, a.HTML, {
        exposeProperties: {
            html: function (e, n) {
                return (0, o.R)(e, n, '');
            }
        },
        matchesTypes: ['Html', 'text/html']
    }),
    s(i, a.URL, {
        exposeProperties: {
            urls: function (e, n) {
                return (0, o.R)(e, n, '').split('\n');
            }
        },
        matchesTypes: ['Url', 'text/uri-list']
    }),
    s(i, a.TEXT, {
        exposeProperties: {
            text: function (e, n) {
                return (0, o.R)(e, n, '');
            }
        },
        matchesTypes: ['Text', 'text/plain']
    }),
    i);
