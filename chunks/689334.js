i.r(a),
    Intl.ListFormat && "function" == typeof Intl.ListFormat.__addLocaleData
        ? Intl.ListFormat.__addLocaleData({
              data: {
                  conjunction: {
                      long: { end: "{0} ir {1}", middle: "{0}, {1}", pair: "{0} ir {1}", start: "{0}, {1}" },
                      narrow: { end: "{0} ir {1}", middle: "{0}, {1}", pair: "{0} ir {1}", start: "{0}, {1}" },
                      short: { end: "{0} ir {1}", middle: "{0}, {1}", pair: "{0} ir {1}", start: "{0}, {1}" },
                  },
                  disjunction: {
                      long: { end: "{0} ar {1}", middle: "{0}, {1}", pair: "{0} ar {1}", start: "{0}, {1}" },
                      narrow: { end: "{0} ar {1}", middle: "{0}, {1}", pair: "{0} ar {1}", start: "{0}, {1}" },
                      short: { end: "{0} ar {1}", middle: "{0}, {1}", pair: "{0} ar {1}", start: "{0}, {1}" },
                  },
                  unit: {
                      long: { end: "{0} ir {1}", middle: "{0} {1}", pair: "{0} ir {1}", start: "{0} {1}" },
                      narrow: { end: "{0} {1}", middle: "{0} {1}", pair: "{0} {1}", start: "{0} {1}" },
                      short: { end: "{0} {1}", middle: "{0} {1}", pair: "{0} {1}", start: "{0} {1}" },
                  },
              },
              locale: "lt",
          })
        : (globalThis.__FORMATJS_LISTFORMAT_DATA__ = globalThis.__FORMATJS_LISTFORMAT_DATA__ || []).push({
              data: {
                  conjunction: {
                      long: { end: "{0} ir {1}", middle: "{0}, {1}", pair: "{0} ir {1}", start: "{0}, {1}" },
                      narrow: { end: "{0} ir {1}", middle: "{0}, {1}", pair: "{0} ir {1}", start: "{0}, {1}" },
                      short: { end: "{0} ir {1}", middle: "{0}, {1}", pair: "{0} ir {1}", start: "{0}, {1}" },
                  },
                  disjunction: {
                      long: { end: "{0} ar {1}", middle: "{0}, {1}", pair: "{0} ar {1}", start: "{0}, {1}" },
                      narrow: { end: "{0} ar {1}", middle: "{0}, {1}", pair: "{0} ar {1}", start: "{0}, {1}" },
                      short: { end: "{0} ar {1}", middle: "{0}, {1}", pair: "{0} ar {1}", start: "{0}, {1}" },
                  },
                  unit: {
                      long: { end: "{0} ir {1}", middle: "{0} {1}", pair: "{0} ir {1}", start: "{0} {1}" },
                      narrow: { end: "{0} {1}", middle: "{0} {1}", pair: "{0} {1}", start: "{0} {1}" },
                      short: { end: "{0} {1}", middle: "{0} {1}", pair: "{0} {1}", start: "{0} {1}" },
                  },
              },
              locale: "lt",
          });
