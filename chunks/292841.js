"use strict";
n.d(t, { I: () => i });
var r = n(64700);
function i(e) {
    let { keyboardDelegate: t, selectionManager: n, onTypeSelect: i } = e,
        s = (0, r.useRef)({ search: "", timeout: void 0 }).current;
    return {
        typeSelectProps: {
            onKeyDownCapture: t.getKeyForSearch
                ? (e) => {
                      var r;
                      let a = 1 !== (r = e.key).length && /^[A-Z]/i.test(r) ? "" : r;
                      if (
                          a &&
                          !e.ctrlKey &&
                          !e.metaKey &&
                          e.currentTarget.contains(e.target) &&
                          (0 !== s.search.length || " " !== a)
                      ) {
                          if (
                              (" " === a &&
                                  s.search.trim().length > 0 &&
                                  (e.preventDefault(), "continuePropagation" in e || e.stopPropagation()),
                              (s.search += a),
                              null != t.getKeyForSearch)
                          ) {
                              let e = t.getKeyForSearch(s.search, n.focusedKey);
                              null == e && (e = t.getKeyForSearch(s.search)),
                                  null != e && (n.setFocusedKey(e), i && i(e));
                          }
                          clearTimeout(s.timeout),
                              (s.timeout = setTimeout(() => {
                                  s.search = "";
                              }, 1e3));
                      }
                  }
                : void 0,
        },
    };
}
