d.r(a),
    Intl.ListFormat && "function" == typeof Intl.ListFormat.__addLocaleData
        ? Intl.ListFormat.__addLocaleData({
              data: {
                  conjunction: {
                      long: {
                          end: "{0}\u548C{1}",
                          middle: "{0}\u3001{1}",
                          pair: "{0}\u548C{1}",
                          start: "{0}\u3001{1}",
                      },
                      narrow: {
                          end: "{0}\u548C{1}",
                          middle: "{0}\u3001{1}",
                          pair: "{0}\u3001{1}",
                          start: "{0}\u3001{1}",
                      },
                      short: {
                          end: "{0}\u548C{1}",
                          middle: "{0}\u3001{1}",
                          pair: "{0}\u548C{1}",
                          start: "{0}\u3001{1}",
                      },
                  },
                  disjunction: {
                      long: {
                          end: "{0}\u6216{1}",
                          middle: "{0}\u3001{1}",
                          pair: "{0}\u6216{1}",
                          start: "{0}\u3001{1}",
                      },
                      narrow: {
                          end: "{0}\u6216{1}",
                          middle: "{0}\u3001{1}",
                          pair: "{0}\u6216{1}",
                          start: "{0}\u3001{1}",
                      },
                      short: {
                          end: "{0}\u6216{1}",
                          middle: "{0}\u3001{1}",
                          pair: "{0}\u6216{1}",
                          start: "{0}\u3001{1}",
                      },
                  },
                  unit: {
                      long: { end: "{0} {1}", middle: "{0} {1}", pair: "{0} {1}", start: "{0} {1}" },
                      narrow: { end: "{0}{1}", middle: "{0}{1}", pair: "{0}{1}", start: "{0}{1}" },
                      short: { end: "{0} {1}", middle: "{0} {1}", pair: "{0} {1}", start: "{0} {1}" },
                  },
              },
              locale: "zh-Hant",
          })
        : (globalThis.__FORMATJS_LISTFORMAT_DATA__ = globalThis.__FORMATJS_LISTFORMAT_DATA__ || []).push({
              data: {
                  conjunction: {
                      long: {
                          end: "{0}\u548C{1}",
                          middle: "{0}\u3001{1}",
                          pair: "{0}\u548C{1}",
                          start: "{0}\u3001{1}",
                      },
                      narrow: {
                          end: "{0}\u548C{1}",
                          middle: "{0}\u3001{1}",
                          pair: "{0}\u3001{1}",
                          start: "{0}\u3001{1}",
                      },
                      short: {
                          end: "{0}\u548C{1}",
                          middle: "{0}\u3001{1}",
                          pair: "{0}\u548C{1}",
                          start: "{0}\u3001{1}",
                      },
                  },
                  disjunction: {
                      long: {
                          end: "{0}\u6216{1}",
                          middle: "{0}\u3001{1}",
                          pair: "{0}\u6216{1}",
                          start: "{0}\u3001{1}",
                      },
                      narrow: {
                          end: "{0}\u6216{1}",
                          middle: "{0}\u3001{1}",
                          pair: "{0}\u6216{1}",
                          start: "{0}\u3001{1}",
                      },
                      short: {
                          end: "{0}\u6216{1}",
                          middle: "{0}\u3001{1}",
                          pair: "{0}\u6216{1}",
                          start: "{0}\u3001{1}",
                      },
                  },
                  unit: {
                      long: { end: "{0} {1}", middle: "{0} {1}", pair: "{0} {1}", start: "{0} {1}" },
                      narrow: { end: "{0}{1}", middle: "{0}{1}", pair: "{0}{1}", start: "{0}{1}" },
                      short: { end: "{0} {1}", middle: "{0} {1}", pair: "{0} {1}", start: "{0} {1}" },
                  },
              },
              locale: "zh-Hant",
          });
