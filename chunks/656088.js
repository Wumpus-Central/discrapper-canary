"use strict";
n.d(t, { A: () => i, O: () => r });
let r = { USER_SELECTION: "user_selection" };
function i(e) {
    return null == e || e.reason !== r.USER_SELECTION
        ? null
        : {
              voice_filter_grid_rows: e.gridRows,
              voice_filter_grid_columns: e.gridColumns,
              voice_filter_interacted_row: e.interactedRow,
              voice_filter_interacted_column: e.interactedColumn,
          };
}
