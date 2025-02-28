function r(e) {
    return null == e
        ? null
        : {
              voice_filter_grid_rows: e.gridRows,
              voice_filter_grid_columns: e.gridColumns,
              voice_filter_interacted_row: e.interactedRow,
              voice_filter_interacted_column: e.interactedColumn
          };
}
n.d(t, { w: () => r });
