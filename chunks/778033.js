n.d(t, {
    W: () => r,
    w: () => i
});
let r = {
    USER_SELECTION: 'user_selection',
    AUTO_PREFETCH: 'auto_prefetch'
};
function i(e) {
    return null == e || e.reason !== r.USER_SELECTION
        ? null
        : {
              voice_filter_grid_rows: e.gridRows,
              voice_filter_grid_columns: e.gridColumns,
              voice_filter_interacted_row: e.interactedRow,
              voice_filter_interacted_column: e.interactedColumn
          };
}
